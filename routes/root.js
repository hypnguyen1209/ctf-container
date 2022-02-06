'use strict'

const postOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['h-captcha-response'],
            properties: {
                'h-captcha-response': {
                    type: 'string'
                }
            }
        },
        response: {
            204: {}
        }
    }
}
/**
 * 
 * @param {import('fastify').FastifyInstance} fastify
 */
module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        reply.view('/public/index.ejs', {
            is_start: false,
            title: process.env.TITLE,
            site_key: process.env.SITEKEY,
        })
    })

    fastify.post('/', postOpts, async (req, reply) => {
        let token = req.body['h-captcha-response']
        if (token.length == 0) {
            reply.code(400)
            return {
                message: 'Captcha invalid!'
            }
        }
        let verify = await fastify.hcaptcha(token)
        if (!verify.success) {
            reply.code(400)
            return {
                message: 'Pls verify captcha bro :v'
            }
        }
        let port = await fastify.port()
        await fastify.startContainer(port)
        reply.view('/public/index.ejs', {
            is_start: true,
            title: process.env.TITLE,
            port,
            countdown: process.env.TIMERUNNING
        })
    })
}
