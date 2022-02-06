const fp = require('fastify-plugin')
const tcpPortUsed = require('tcp-port-used')

const randomPort = () => {
    return 10000 + Math.floor(Math.random() * (50000 - 10000))
}

const portContainer = async () => {
    let port = randomPort()
    let inUse = await tcpPortUsed.check(port)
    if (inUse) {
        return await portContainer()
    } else {
        return port
    }
}

/**
 * 
 * @param {*} fastify 
 * @param {object} opts 
 */
const plugin = async (fastify, opts) => {
    opts = opts || {}
    fastify.decorate('port', portContainer)
}

module.exports = fp(plugin)