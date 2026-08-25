export type TaskStatus = 'todo' | 'doing' | 'done';
export type Task = {
  id: string;
  title: string;
  details: string;
  detailType: 'text' | 'code';
  status: TaskStatus;
  projectId: string;
  folderId: string;
  category: string;
  createdAt: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'done';
  color: string;
  createdAt: string;
};

export type ProjectFolder = { id: string; projectId: string; name: string; createdAt: string };
export type SystemKind = 'vm' | 'website';
export type SystemActivity = 'check' | 'backup' | 'bugfix' | 'ssl' | 'start' | 'update' | 'other';
export type SystemLog = {
  id: string;
  kind: SystemKind;
  systemName: string;
  activity: SystemActivity;
  otherActivity?: string;
  details: string;
  date: string;
  completed: boolean;
  createdAt: string;
  agencyId?: string;
};
export type SystemAgency = { id:string; name:string; shortName:string; createdAt:string };
export type VmSystem = { id:string; agencyId:string; status:string; serverName:string; thaiName:string; urls:string[] };
export type WebsiteSystem = { id:string; agencyId:string; status:string; vm:string; thaiName:string; url:string; development:string; responsibleGroup:string; responsible:string };
export type WorkData = { tasks: Task[]; projects: Project[]; folders: ProjectFolder[]; systemLogs: SystemLog[]; systemAgencies:SystemAgency[]; vmSystems:VmSystem[]; websiteSystems:WebsiteSystem[] };
export type WorkSection = 'dashboard' | 'tasks' | 'systems' | 'calendar';
