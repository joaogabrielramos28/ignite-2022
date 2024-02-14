import { OrgInvalidCredentials } from '@/use-cases/errors/org-invalid-credentials'
import { makeAuthenticateOrgUseCase } from '@/use-cases/factories/orgs/make-authenticate-org-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),

    password: z.string(),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    const authenticateUseCase = makeAuthenticateOrgUseCase()

    const { org } = await authenticateUseCase.execute({
      email,
      password,
    })

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: org.id,
        },
      },
    )

    return reply.status(200).send({ token })
  } catch (err) {
    if (err instanceof OrgInvalidCredentials) {
      return reply.status(400).send({
        message: err.message,
      })
    }

    throw err
  }
}
