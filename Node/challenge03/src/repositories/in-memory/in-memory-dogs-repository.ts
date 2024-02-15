import { Dog, Org, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'
import { DogsRepository, SearchPetsProps } from '../dogs-repository'

export class InMemoryDogsRepository implements DogsRepository {
  public dogs: Dog[] = []

  async create(data: Prisma.DogUncheckedCreateInput) {
    const newDog: Dog = {
      ...data,
      id: randomUUID(),
      name: data.name,
      about: data.about,
      age: data.age,
      energy: data.energy,
      environment: data.environment,
      independent: data.independent,
      size: data.size,
      createdAt: new Date(),
      requirements: data.requirements as string[],
      orgId: data.orgId,
    }

    this.dogs.push(newDog)

    return newDog
  }

  async findById(id: string) {
    const dog = this.dogs.find((dog) => dog.id === id)

    if (!dog) {
      return null
    }

    return dog
  }

  async getDogsByOrgs(orgs: Org[]) {
    const orgsIds = orgs.map((org) => org.id)
    const dogs = this.dogs.filter((dog) => orgsIds.includes(dog.orgId))

    if (!dogs) {
      return null
    }

    return dogs
  }

  async findMany({ age, energy, size }: SearchPetsProps) {
    const dogs = this.dogs.filter(
      (dog) => dog.age === age || dog.size === size || dog.energy === energy,
    )

    return dogs
  }
}
