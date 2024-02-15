import { OrgsRepository } from '@/repositories/orgs-repository'
import { RegisterDogUseCase } from './register'
import { DogsRepository } from '@/repositories/dogs-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { InMemoryDogsRepository } from '@/repositories/in-memory/in-memory-dogs-repository'
import { hash } from 'bcryptjs'
import { OrgNotFound } from '../errors/org-not-found'

let sut: RegisterDogUseCase
let orgsRepository: OrgsRepository
let dogsRepository: DogsRepository

describe('register dog use case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    dogsRepository = new InMemoryDogsRepository()
    sut = new RegisterDogUseCase(dogsRepository, orgsRepository)
  })
  it('should be able to register a dog', async () => {
    const org = await orgsRepository.create({
      address: 'address 01',
      email: 'johnDoe@example.com',
      password_hash: await hash('123456', 6),
      responsible_name: 'John Doe',
      whatsApp: '21992746640',
      zip_code: '99999999',
    })
    const { dog } = await sut.execute({
      name: 'Oddie',
      about: 'about-fake',
      age: 'YOUNG',
      energy: 'VERY_HIGH',
      environment: 'MEDIUM',
      independent: 'MEDIUM',
      requirements: ['fake-1', 'fake-2'],
      size: 'MEDIUM',
      orgId: org.id,
    })

    expect(dog.id).toEqual(expect.any(String))
  })

  it('should not be able to register with invalid org id', async () => {
    await expect(() =>
      sut.execute({
        name: 'Oddie',
        about: 'about-fake',
        age: 'YOUNG',
        energy: 'VERY_HIGH',
        environment: 'MEDIUM',
        independent: 'MEDIUM',
        requirements: ['fake-1', 'fake-2'],
        size: 'MEDIUM',
        orgId: 'fake-org-id',
      }),
    ).rejects.toBeInstanceOf(OrgNotFound)
  })
})
