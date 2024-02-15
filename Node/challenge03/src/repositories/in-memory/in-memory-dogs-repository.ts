import { Dog, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'
import { DogsRepository } from '../dogs-repository'

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
}
