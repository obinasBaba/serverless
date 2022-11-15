export interface TodoItem {
  userId: string
  todoId: string
  createdAt: string
  name: string
  dueDate: string
  done: boolean
  attachmentUrl?: string
}

// Fields in a request to create a single TODO item.
export interface TodoCreate {
  name: string
  dueDate: string
}

// Fields in a request to update a single TODO item.
export interface TodoUpdate {
  name: string
  dueDate: string
  done: boolean
}
