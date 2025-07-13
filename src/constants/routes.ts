export const ROUTES = {
  LOGIN: 'LOGIN',
  BOOKING: 'BOOKING',
  CALENDAR: 'CALENDAR',
  SUMMARY: 'SUMMARY',
  MANAGE_APPOINTMENT: 'MANAGE_APPOINTMENT',
};
export const ROUTES_HEADER: Record<keyof typeof ROUTES, string> = {
  LOGIN: 'התחברות',
  MANAGE_APPOINTMENT: 'ניהול תורים',
  BOOKING: 'הזמן תור',
  CALENDAR: 'לוח זמנים',
  SUMMARY: 'סיכום',
};
