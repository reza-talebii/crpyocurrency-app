export const currencyFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat('en')

  return formatter.format(value)
}
