import { AuthenticateOrgUseCase } from './authenticate'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { hash } from 'bcryptjs'
import { OrgInvalidCredentials } from '../errors/org-invalid-credentials'

let sut: AuthenticateOrgUseCase
let repository: InMemoryOrgsRepository

describe('Authenticate org use case', () => {
  beforeEach(() => {
    repository = new InMemoryOrgsRepository()
    sut = new AuthenticateOrgUseCase(repository)
  })
  it('Should be able to authenticate', async () => {
    await repository.create({
      address: 'address 01',
      email: 'johnDoe@example.com',
      password_hash: await hash('123456', 6),
      responsible_name: 'John Doe',
      whatsApp: '21992746640',
      zip_code: '99999999',
    })

    const { org } = await sut.execute({
      email: 'johnDoe@example.com',
      password: '123456',
    })

    expect(org.id).toEqual(expect.any(String))
  })

  it('should not authenticate with wrong email', async () => {
    await repository.create({
      address: 'address 01',
      email: 'johnDoe@example.com',
      password_hash: await hash('123456', 6),
      responsible_name: 'John Doe',
      whatsApp: '21992746640',
      zip_code: '99999999',
    })

    await expect(() =>
      sut.execute({
        email: 'invalid@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(OrgInvalidCredentials)
  })
  it('should not authenticate with wrong password', async () => {
    await repository.create({
      address: 'address 01',
      email: 'johnDoe@example.com',
      password_hash: await hash('123456', 6),
      responsible_name: 'John Doe',
      whatsApp: '21992746640',
      zip_code: '99999999',
    })

    await expect(() =>
      sut.execute({
        email: 'johnDoe@example.com',
        password: '1234536',
      }),
    ).rejects.toBeInstanceOf(OrgInvalidCredentials)
  })
})
