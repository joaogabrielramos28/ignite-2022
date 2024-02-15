import { DogsRepository } from '@/repositories/dogs-repository'
import { Age, Dog, Scale, Size } from '@prisma/client'
import { DogNotFound } from '../errors/dog-not-found'

interface getDogsUseCaseRequest {
  age: Age
  city: string
  energy: Scale
  size: Size
}

interface getDogsUseCaseResponse {
  dogs: Dog[]
}

export class GetDogsUseCase {
  constructor(private dogsRepository: DogsRepository) {}

  async execute({
    age,
    city,
    energy,
    size,
  }: getDogsUseCaseRequest): Promise<getDogsUseCaseResponse> {
    const dogs = await this.dogsRepository.findMany({ age, city, energy, size })

    if (!dogs) {
      throw new DogNotFound()
    }

    return {
      dogs,
    }
  }
}
