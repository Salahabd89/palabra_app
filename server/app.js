const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })

 module.exports = {nextapp : nextapp };