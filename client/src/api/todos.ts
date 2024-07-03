type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

export function getTodos() {
  return fetch(`${process.env.API_URL}/todos`).then(res => res.json()).then(data => data as Todo[]);
}

export async function getUserTodos(userId: string | number) {
  return fetch(`${process.env.API_URL}/todos?userId=${userId}`)
    .then(res => res.json())
    .then(data => data as Todo[])
}