import { DogsRepository } from '@/repositories/dogs-repository'
import { OrgsRepository } from '@/repositories/orgs-repository'
import { $Enums, Dog } from '@prisma/client'
import { OrgNotFound } from '../errors/org-not-found'

interface RegisterDogUseCaseRequest {
  name: string
  about: string
  age: $Enums.Age
  size: $Enums.Size
  energy: $Enums.Scale
  independent: $Enums.Scale
  environment: $Enums.Size
  requirements: string[]
  orgId: string
}

interface RegisterDogUseCaseResponse {
  dog: Dog
}

export class RegisterDogUseCase {
  constructor(
    private dogsRepository: DogsRepository,
    private orgsRepository: OrgsRepository,
  ) {}

  async execute({
    name,
    about,
    age,
    energy,
    environment,
    independent,
    requirements,
    size,
    orgId,
  }: RegisterDogUseCaseRequest): Promise<RegisterDogUseCaseResponse> {
    const org = await this.orgsRepository.findById(orgId)

    if (!org) {
      throw new OrgNotFound()
    }

    const createdDog = await this.dogsRepository.create({
      name,
      about,
      age,
      energy,
      environment,
      independent,
      size,
      requirements,
      orgId,
    })

    return {
      dog: createdDog,
    }
  }
}
