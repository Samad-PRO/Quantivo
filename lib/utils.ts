import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }
export function formatCurrency(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
}
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(typeof date === 'string' ? new Date(date) : date)
}
export function calculatePercentage(current: number, target: number) {
  if (target === 0) return 0
  return Math.min(Math.round((current / target) * 100), 100)
}
