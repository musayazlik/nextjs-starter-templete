export type UserRole = "admin" | "editor" | "viewer";

export const ROLES: Record<UserRole, string> = {
  admin: "Administrator",
  editor: "Content Editor",
  viewer: "Viewer",
} as const;

export const ROLE_OPTIONS = Object.entries(ROLES).map(([value, label]) => ({
  value,
  label,
}));