import { Org, Prisma } from '@prisma/client'
import { OrgsRepository } from '../orgs-repository'
import { randomUUID } from 'crypto'

export class InMemoryOrgsRepository implements OrgsRepository {
  public orgs: Org[] = []

  async create(data: Prisma.OrgCreateInput) {
    const newOrg = {
      id: randomUUID(),
      responsible_name: data.responsible_name,
      email: data.email,
      zip_code: data.zip_code,
      address: data.address,
      whatsApp: data.whatsApp,
      password_hash: data.password_hash,
      createdAt: new Date(),
    }

    this.orgs.push(newOrg)

    return newOrg
  }

  async findByEmail(email: string) {
    const org = this.orgs.find((org) => org.email === email)

    if (!org) {
      return null
    }

    return org
  }
}
