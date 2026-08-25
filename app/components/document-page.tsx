'use client';

type DocumentPageProps = {
  title: string;
  document: string;
};

export default function DocumentPage({ title, document }: DocumentPageProps) {
  const sidebarEnhancements = `
    <style>
      .toc a.is-active {
        color: #111827 !important;
        font-weight: 800 !important;
        text-decoration: underline;
        text-decoration-color: currentColor;
        text-underline-offset: 4px;
      }
      @media (min-width: 760px) {
        .toc {
          position: sticky !important;
          top: 0 !important;
          align-self: start !important;
          max-height: 100vh !important;
          overflow-y: auto !important;
          overscroll-behavior: contain;
          scrollbar-gutter: stable;
        }
      }
    </style>
    <script>
      (() => {
        const links = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
        if (links.length === 0) return;

        const sections = links
          .map((link) => {
            link.setAttribute('target', '_self');
            const id = decodeURIComponent(link.getAttribute('href').slice(1));
            const section = document.getElementById(id);
            return section ? { link, section } : null;
          })
          .filter(Boolean);

        const toc = document.querySelector('.toc');

        const selectLink = (activeLink) => {
          for (const { link } of sections) {
            const active = link === activeLink;
            link.classList.toggle('is-active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          }
          if (toc && toc.scrollHeight > toc.clientHeight) {
            const linkTop = activeLink.offsetTop;
            const linkBottom = linkTop + activeLink.offsetHeight;
            const visibleTop = toc.scrollTop;
            const visibleBottom = visibleTop + toc.clientHeight;

            if (linkTop < visibleTop) toc.scrollTop = linkTop;
            else if (linkBottom > visibleBottom) {
              toc.scrollTop = linkBottom - toc.clientHeight;
            }
          }
        };

        for (const { link, section } of sections) {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', '#' + encodeURIComponent(section.id));
            selectLink(link);
          });
        }

        const observer = new IntersectionObserver(
          (entries) => {
            const visible = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
            if (!visible) return;
            const match = sections.find(({ section }) => section === visible.target);
            if (match) selectLink(match.link);
          },
          { rootMargin: '-10% 0px -72% 0px', threshold: 0 }
        );

        for (const { section } of sections) observer.observe(section);

        const initial = sections.find(({ section }) => '#' + section.id === location.hash);
        selectLink(initial?.link ?? sections[0].link);
      })();
    </script>
  `;

  const enhancedDocument = document.includes('</body>')
    ? document.replace('</body>', `${sidebarEnhancements}</body>`)
    : `${document}${sidebarEnhancements}`;

  return (
    <iframe
      className="block min-h-dvh w-full border-0 bg-white"
      srcDoc={enhancedDocument}
      title={title}
    />
  );
}
