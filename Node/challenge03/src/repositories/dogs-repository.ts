import { Dog, Org, Prisma } from '@prisma/client'

export interface DogsRepository {
  create(data: Prisma.DogUncheckedCreateInput): Promise<Dog>
  findById(id: string): Promise<Dog | null>
  getDogsByOrgs(orgs: Org[]): Promise<Dog[] | null>
}
