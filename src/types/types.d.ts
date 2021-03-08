export class CategoryData {
  categoryId?: number;
  categoryName?: string;
  color?: string;
}

export class TaskData {
  taskId?: number;
  categoryId?: number;
  subject?: string;
  statusId?: number;
  deadLine?: string;
}

export class StatusData {
  statusId?: number;
  statusName?: string;
  color?: string;
}
