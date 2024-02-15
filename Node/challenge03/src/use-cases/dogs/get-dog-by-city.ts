import { DogsRepository } from '@/repositories/dogs-repository'
import { DogNotFound } from '../errors/dog-not-found'
import { OrgsRepository } from '@/repositories/orgs-repository'

interface DogsByCity {
  id: string
  name: string
}

interface GetDogByCityUseCaseRequest {
  city: string
}

interface GetDogByCityUseCaseResponse {
  dogs: DogsByCity[] | null
}

export class GetDogByCityUseCase {
  constructor(
    private dogsRepository: DogsRepository,
    private orgsRepository: OrgsRepository,
  ) {}

  async execute({
    city,
  }: GetDogByCityUseCaseRequest): Promise<GetDogByCityUseCaseResponse> {
    const orgs = await this.orgsRepository.getOrgsByCity(city)

    if (!orgs) {
      // fix this
      throw new DogNotFound()
    }

    const dogs = await this.dogsRepository.getDogsByOrgs(orgs)

    if (dogs?.length === 0) {
      throw new DogNotFound()
    }

    return {
      dogs,
    }
  }
}
