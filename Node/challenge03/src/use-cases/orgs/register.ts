import { Org } from '@prisma/client'
import { OrgAlreadyExists } from '../errors/org-already-exists'
import { hash } from 'bcryptjs'
import { OrgsRepository } from '@/repositories/orgs-repository'

interface RegisterOrgUseCaseRequest {
  responsibleName: string
  email: string
  zipCode: string
  address: string
  whatsApp: string
  password: string
}

interface RegisterOrgUseCaseResponse {
  org: Org
}

export class RegisterOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    address,
    email,
    password,
    responsibleName,
    whatsApp,
    zipCode,
  }: RegisterOrgUseCaseRequest): Promise<RegisterOrgUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email)

    if (org?.id) {
      throw new OrgAlreadyExists()
    }

    const password_hash = await hash(password, 6)

    const createdOrg = await this.orgsRepository.create({
      address,
      email,
      password_hash,
      responsible_name: responsibleName,
      whatsApp,
      zip_code: zipCode,
    })

    return {
      org: createdOrg,
    }
  }
}
