import { makeRegisterDogUseCase } from '@/use-cases/factories/dogs/make-register.dog-use-case'
import { $Enums } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    about: z.string(),
    age: z.nativeEnum($Enums.Age),
    size: z.nativeEnum($Enums.Size),
    energy: z.nativeEnum($Enums.Scale),
    independent: z.nativeEnum($Enums.Scale),
    environment: z.nativeEnum($Enums.Size),
    requirements: z.string().array(),
  })

  const registerQueryParamsSchema = z.object({
    orgId: z.string(),
  })

  const {
    name,
    about,
    age,
    size,
    energy,
    independent,
    environment,
    requirements,
  } = registerBodySchema.parse(request.body)

  const { orgId } = registerQueryParamsSchema.parse(request.params)
  const registerUseCase = makeRegisterDogUseCase()

  await registerUseCase.execute({
    name,
    about,
    age,
    energy,
    environment,
    independent,
    requirements,
    size,
    orgId,
  })

  return reply.status(201).send()
}
