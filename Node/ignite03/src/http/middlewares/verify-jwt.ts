import { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = request.headers.authorization

    if (!token) {
      throw new Error('Token not found')
    }
    await request.jwtVerify()
  } catch (err) {
    reply.status(401).send({ message: 'Unauthorized' })
  }
}
