import { describe, it, expect, beforeEach } from 'vitest'
import { RegisterOrgUseCase } from './register'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository.js'
import { OrgAlreadyExists } from '../errors/org-already-exists.js'
import { compare } from 'bcryptjs'

let orgsRepository: InMemoryOrgsRepository
let sut: RegisterOrgUseCase

describe('Register org Use case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new RegisterOrgUseCase(orgsRepository)
  })

  it('should register a org', async () => {
    const { org } = await sut.execute({
      address: 'address 01',
      email: 'johnDoe@example.com',
      password: '123456',
      responsibleName: 'John Doe',
      whatsApp: '21992746640',
      zipCode: '99999999',
    })

    expect(org.id).toEqual(expect.any(String))
  })

  it('should hash org password when register', async () => {
    const { org } = await sut.execute({
      address: 'address 01',
      email: 'johnDoe@example.com',
      password: '123456',
      responsibleName: 'John Doe',
      whatsApp: '21992746640',
      zipCode: '99999999',
    })

    const passwordIsHashed = await compare('123456', org.password_hash)

    expect(passwordIsHashed).toBe(true)
  })

  it('shouldn`t register a org with existing email', async () => {
    await sut.execute({
      address: 'address 01',
      email: 'johnDoe@example.com',
      password: '123456',
      responsibleName: 'John Doe',
      whatsApp: '21992746640',
      zipCode: '99999999',
    })

    await expect(() =>
      sut.execute({
        address: 'address 01',
        email: 'johnDoe@example.com',
        password: '123456',
        responsibleName: 'John Doe',
        whatsApp: '21992746640',
        zipCode: '99999999',
      }),
    ).rejects.toBeInstanceOf(OrgAlreadyExists)
  })
})
