import { PrismaDogsRepository } from '@/repositories/prisma/prisma-dogs-repository'
import { GetDogDetailsUseCase } from '@/use-cases/dogs/get-dog-details'

export function makeGetDogDetailsUseCase() {
  const dogsRepository = new PrismaDogsRepository()
  const useCase = new GetDogDetailsUseCase(dogsRepository)

  return useCase
}
