export function getAdminEmails(): string[] {
  return (import.meta.env.ADMIN_EMAILS || '')
    .split(',')
    .map((e: string) => e.trim())
    .filter(Boolean);
}

export function isAdminEmail(email?: string | null): boolean {
  return !!(email && getAdminEmails().includes(email));
}
