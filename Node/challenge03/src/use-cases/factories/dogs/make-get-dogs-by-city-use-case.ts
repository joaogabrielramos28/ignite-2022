import { PrismaDogsRepository } from '@/repositories/prisma/prisma-dogs-repository'
import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { GetDogByCityUseCase } from '@/use-cases/dogs/get-dog-by-city'

export function makeGetDogsByCityUseCase() {
  const dogsRepository = new PrismaDogsRepository()
  const orgsRepository = new PrismaOrgsRepository()
  const useCase = new GetDogByCityUseCase(dogsRepository, orgsRepository)

  return useCase
}
