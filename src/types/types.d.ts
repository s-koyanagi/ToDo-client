export interface ProjectData {
  projectId?: number;
  projectName?: string;
  color?: string;
}

export interface TaskData {
  taskid: number;
  projectId: number;
  subject: string;
  statusId: number;
  deadLine: Date;
}
