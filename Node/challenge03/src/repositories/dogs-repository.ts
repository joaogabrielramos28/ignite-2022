import { Dog, Prisma } from '@prisma/client'

export interface DogsRepository {
  create(data: Prisma.DogUncheckedCreateInput): Promise<Dog>
  findById(id: string): Promise<Dog | null>
}
