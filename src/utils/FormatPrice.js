export const FormatPrice = (price) => {
  const formattedPrice = price.toFixed(2)
  const [integerPart, decimalPart] = formattedPrice.split('.')
  const integerWithSeparator = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return `${integerWithSeparator},${decimalPart} zł`
}
