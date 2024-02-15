import { DogNotFound } from '@/use-cases/errors/dog-not-found'
import { makeGetDogsByCityUseCase } from '@/use-cases/factories/dogs/make-get-dogs-by-city-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function getDogsByCity(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getDogsByCityQueryParamsSchema = z.object({
    city: z.string(),
  })

  const { city } = getDogsByCityQueryParamsSchema.parse(request.params)
  const getDogsByCityUseCase = makeGetDogsByCityUseCase()

  try {
    const { dogs } = await getDogsByCityUseCase.execute({
      city,
    })

    return reply.status(200).send({
      dogs,
    })
  } catch (err) {
    if (err instanceof DogNotFound) {
      return reply.status(204).send({
        message: err.message,
      })
    }
  }
}
