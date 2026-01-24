// config.js
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/youth' : '';

module.exports = { isProd, basePath };