export const convertDate = (date: string | Date) =>
  new Date(date).toLocaleString('fa-IR', { year: 'numeric', month: '2-digit', day: 'numeric' })

export const getHour = (date: string | Date) => new Date(date).toLocaleString('fa-IR', { hour: '2-digit', minute: '2-digit' })
