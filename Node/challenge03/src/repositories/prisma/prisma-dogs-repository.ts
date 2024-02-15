import { $Enums, Org, Prisma } from '@prisma/client'
import { DogsRepository, SearchPetsProps } from '../dogs-repository'
import { prisma } from '@/lib/prisma'

export class PrismaDogsRepository implements DogsRepository {
  async create(data: Prisma.DogUncheckedCreateInput) {
    const dog = await prisma.dog.create({
      data,
    })

    return dog
  }

  async findById(id: string) {
    const dog = await prisma.dog.findUnique({
      where: {
        id,
      },
    })

    return dog
  }

  async getDogsByOrgs(orgs: Org[]) {
    const orgsIds = orgs.map((org) => org.id)
    const dogs = await prisma.dog.findMany({
      where: {
        orgId: {
          in: orgsIds,
        },
      },
    })
    return dogs
  }

  async findMany({ age, city, energy, size }: SearchPetsProps) {
    const dogs = prisma.dog.findMany({
      where: {
        Org: {
          address: city,
        },
        age,
        energy,
        size,
      },
    })

    return dogs
  }
}
