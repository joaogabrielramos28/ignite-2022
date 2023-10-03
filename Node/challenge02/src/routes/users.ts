import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createUserSchema = z.object({
      name: z.string(),
    })
    const { name } = createUserSchema.parse(request.body)

    const newUser = {
      id: randomUUID(),
      name,
    }

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = newUser.id
      reply.setCookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7days,
      })
    }

    await knex('users').insert(newUser)

    reply.status(201).send()
  })
}
