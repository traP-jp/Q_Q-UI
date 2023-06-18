export const baseUrl = import.meta.env.DEV
  ? 'http://localhost:8000'
  : `${location.protocol}//${location.host}`
