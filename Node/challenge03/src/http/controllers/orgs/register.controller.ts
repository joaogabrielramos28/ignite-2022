import { OrgAlreadyExists } from '@/use-cases/errors/org-already-exists'
import { makeRegisterOrgUseCase } from '@/use-cases/factories/orgs/make-register-org-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    responsibleName: z.string(),
    email: z.string().email(),
    zipCode: z.string().min(8),
    address: z.string(),
    whatsApp: z.string().min(11),
    password: z.string(),
  })

  const { address, email, password, responsibleName, whatsApp, zipCode } =
    registerBodySchema.parse(request.body)

  try {
    const registerUseCase = makeRegisterOrgUseCase()

    await registerUseCase.execute({
      address,
      email,
      password,
      responsibleName,
      whatsApp,
      zipCode,
    })
  } catch (err) {
    if (err instanceof OrgAlreadyExists) {
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }
  return reply.status(201).send()
}
