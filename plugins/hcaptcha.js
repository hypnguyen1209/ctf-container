const fp = require('fastify-plugin')
const { verify } = require('hcaptcha')

/**
 * 
 * @param {*} fastify 
 * @param {object} opts 
 */
const plugin = async (fastify, opts) => {
    opts = opts || {}
    fastify.decorate('hcaptcha', (token, callback) => verify(process.env.SECRETKEY, token).then(callback))
}

module.exports = fp(plugin)