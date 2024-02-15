import { FastifyInstance } from 'fastify'
import { register } from './register.controller'
import { verifyJwtToken } from '@/http/middlewares/verify-jwt-token'
import { getDogDetails } from './get-dog-details.controller'
import { getDogsByCity } from './get-dogs-by-city.controller'

export async function dogsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwtToken)

  app.post('/dogs/:orgId', register)

  app.get('/dogs/:dogId', getDogDetails)

  app.get('/dogs/list/:city', getDogsByCity)
}
