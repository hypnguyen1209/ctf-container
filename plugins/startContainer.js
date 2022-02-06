const fp = require('fastify-plugin')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

/**
 * 
 * @param {int} port port use deploy container
 */
const startContainer = async port => {
    await exec(`./deploy/run_container.sh ${PORT}`)
    setTimeout(async _ => {
        await exec(`./deploy/destroy.sh ${PORT}`)
    }, process.env.TIMERUNNING * 60 * 1000)
}

/**
 * 
 * @param {*} fastify 
 * @param {object} opts 
 */
const plugin = async (fastify, opts) => {
    opts = opts || {}
    fastify.decorate('startContainer', startContainer)
}

module.exports = fp(plugin)