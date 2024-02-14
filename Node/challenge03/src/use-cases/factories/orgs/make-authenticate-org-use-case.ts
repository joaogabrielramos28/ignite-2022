import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { AuthenticateOrgUseCase } from '@/use-cases/orgs/authenticate'

export function makeAuthenticateOrgUseCase() {
  const repository = new PrismaOrgsRepository()
  const useCase = new AuthenticateOrgUseCase(repository)

  return useCase
}
