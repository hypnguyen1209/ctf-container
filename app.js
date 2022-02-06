'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {
    // Place here your custom code!
    // add plugin to parse x-www-form-urlencoded
    fastify.register(require('fastify-formbody'))

    // Static web
    fastify.register(require('fastify-static'), {
        root: path.join(__dirname, 'public'),
        prefix: '/', // optional: default '/'
    })
    fastify.register(require("point-of-view"), {
        engine: {
            ejs: require("ejs"),
        },
    })

    //add handler error
    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    })

    // This loads all plugins defined in routes
    // define your routes in one of these
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    })
}
