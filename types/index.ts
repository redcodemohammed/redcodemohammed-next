export {}

declare global {
  interface IContactRequest {
    name: string
    email: string
    message: string
  }
}
