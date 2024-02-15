import { Age, Dog, Org, Prisma, Scale, Size } from '@prisma/client'

export interface SearchPetsProps {
  city: string
  age: Age | null
  energy: Scale | null
  size: Size | null
}

export interface DogsRepository {
  create(data: Prisma.DogUncheckedCreateInput): Promise<Dog>
  findById(id: string): Promise<Dog | null>
  getDogsByOrgs(orgs: Org[]): Promise<Dog[] | null>
  findMany(query: SearchPetsProps): Promise<Dog[]>
}
