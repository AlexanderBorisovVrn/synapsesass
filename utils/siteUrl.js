const production = process.env.NODE_ENV;

export const SITE_URL = production === 'production' ? prod_url : 'http://localhost:3000'