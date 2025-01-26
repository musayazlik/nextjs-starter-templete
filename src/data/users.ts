// data/users.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    role: "admin",
    avatar: "/avatars/ahmet.jpg",
  },
  {
    id: "2",
    name: "Ayşe Demir",
    email: "ayse@example.com",
    role: "user",
    avatar: "/avatars/ayse.jpg",
  },
];