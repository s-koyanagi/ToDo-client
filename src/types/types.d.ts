export class ProjectData {
  projectId?: number;
  projectName?: string;
  color?: string;
}

export class TaskData {
  taskId?: number;
  projectId?: number;
  subject?: string;
  statusId?: number;
  deadLine?: string;
}

export class StatusData {
  statusId?: number;
  statusName?: string;
  color?: string;
}
