import { FastifyInstance } from 'fastify'
import { register } from './register.controller'
import { verifyJwtToken } from '@/http/middlewares/verify-jwt-token'

export async function dogsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwtToken)

  app.post('/dogs/:orgId', register)
}
