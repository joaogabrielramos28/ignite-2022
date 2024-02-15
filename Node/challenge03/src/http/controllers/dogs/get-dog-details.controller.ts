import { DogNotFound } from '@/use-cases/errors/dog-not-found'
import { makeGetDogDetailsUseCase } from '@/use-cases/factories/dogs/make-get-dog-details-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function getDogDetails(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getDogDetailsQueryParamsSchema = z.object({
    dogId: z.string(),
  })

  const { dogId } = getDogDetailsQueryParamsSchema.parse(request.params)
  const getDogDetailsUseCase = makeGetDogDetailsUseCase()

  try {
    const { dog } = await getDogDetailsUseCase.execute({
      id: dogId,
    })

    return reply.status(200).send({
      dog,
    })
  } catch (err) {
    if (err instanceof DogNotFound) {
      return reply.status(404).send({
        message: err.message,
      })
    }
  }
}
