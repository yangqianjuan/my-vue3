let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = process.env.VUE_APP_BASE_URL
}

export { BASE_URL }
