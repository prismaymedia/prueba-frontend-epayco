export class Item {
  public readonly id: number;
  public readonly title: string;
  public readonly body: string;
  public readonly userId?: number;

  constructor(id: number, title: string, body: string, userId?: number) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.userId = userId;
  }

  static create(title: string, body: string, userId?: number): Omit<Item, 'id'> {
    if (!title.trim()) {
      throw new Error('El título es requerido');
    }
    if (!body.trim()) {
      throw new Error('El contenido es requerido');
    }
    if (title.length < 3) {
      throw new Error('El título debe tener al menos 3 caracteres');
    }
    if (body.length < 10) {
      throw new Error('El contenido debe tener al menos 10 caracteres');
    }

    return {
      title: title.trim(),
      body: body.trim(),
      userId: userId || 1
    };
  }
}
