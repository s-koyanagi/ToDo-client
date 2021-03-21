export default class TaskForm {
  private categoryId?: number;
  private subject?: string;
  private deadLine?: string;

  constructor(init: Partial<TaskForm>) {
    Object.assign(init, this);
  }
}
