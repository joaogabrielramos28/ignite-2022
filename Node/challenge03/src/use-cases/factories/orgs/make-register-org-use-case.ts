import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { RegisterOrgUseCase } from '@/use-cases/orgs/register'

export function makeRegisterOrgUseCase() {
  const repository = new PrismaOrgsRepository()
  const useCase = new RegisterOrgUseCase(repository)

  return useCase
}
