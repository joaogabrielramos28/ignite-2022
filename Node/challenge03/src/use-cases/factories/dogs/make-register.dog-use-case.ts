import { PrismaDogsRepository } from '@/repositories/prisma/prisma-dogs-repository'
import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { RegisterDogUseCase } from '@/use-cases/dogs/register'

export function makeRegisterDogUseCase() {
  const orgsRepository = new PrismaOrgsRepository()
  const dogsRepository = new PrismaDogsRepository()
  const useCase = new RegisterDogUseCase(dogsRepository, orgsRepository)

  return useCase
}
