import type { WorkData } from './types';
import { mockWorkData } from './mock-data';

export const WORK_STORAGE_KEY = 'CHAMP_WORK_NEXT_V3';
export const emptyWorkData: WorkData = mockWorkData;

export function loadWorkData(): WorkData {
  try {
    const raw = localStorage.getItem(WORK_STORAGE_KEY);
    if (!raw) return emptyWorkData;
    const data = JSON.parse(raw);
    return {
      tasks: Array.isArray(data.tasks) ? data.tasks.map((task: Record<string, unknown>) => {
        const { dueDate: _removedDueDate, priority: _removedPriority, ...currentTask } = task;
        void _removedDueDate; void _removedPriority;
        return { ...currentTask, detailType: currentTask.detailType === 'code' ? 'code' : 'text', folderId: typeof currentTask.folderId === 'string' ? currentTask.folderId : '' };
      }) : [],
      projects: Array.isArray(data.projects) ? data.projects : [],
      folders: Array.isArray(data.folders) ? data.folders : [],
      systemLogs: Array.isArray(data.systemLogs) ? data.systemLogs : mockWorkData.systemLogs,
      systemAgencies: Array.isArray(data.systemAgencies) ? data.systemAgencies : mockWorkData.systemAgencies,
      vmSystems: Array.isArray(data.vmSystems) ? data.vmSystems : mockWorkData.vmSystems,
      websiteSystems: Array.isArray(data.websiteSystems) ? data.websiteSystems : mockWorkData.websiteSystems
    };
  } catch {
    return emptyWorkData;
  }
}

export function saveWorkData(data: WorkData) {
  localStorage.setItem(WORK_STORAGE_KEY, JSON.stringify(data));
}

export const makeId = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
