import { DogsRepository } from '@/repositories/dogs-repository'
import { Dog } from '@prisma/client'
import { DogNotFound } from '../errors/dog-not-found'

interface getDogDetailsUseCaseRequest {
  id: string
}

interface getDogDetailsUseCaseResponse {
  dog: Dog
}

export class GetDogDetailsUseCase {
  constructor(private dogsRepository: DogsRepository) {}

  async execute({
    id,
  }: getDogDetailsUseCaseRequest): Promise<getDogDetailsUseCaseResponse> {
    const dog = await this.dogsRepository.findById(id)

    if (!dog) {
      throw new DogNotFound()
    }

    return {
      dog,
    }
  }
}
