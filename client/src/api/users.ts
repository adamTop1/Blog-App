type User = {
  id: number
  name: string
  email: string
  website: string
  address: {
    city: string
    street: string
    zipcode: string
    suite: string
  }
  company: {
    name: string
  }
}

export function getUsers() {
  return fetch(`${process.env.API_URL}/users`).then(res => res.json()).then(data => data as User[])
}

export function getUser(userId: string | number) {
  return fetch(`${process.env.API_URL}/users/${userId}`).then(res => res.json()).then(data => data as User)
}
