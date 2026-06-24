export const DEFAULT_CURRENCY = 'USD'

export function formatCurrency(amount: number, currency = DEFAULT_CURRENCY) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
