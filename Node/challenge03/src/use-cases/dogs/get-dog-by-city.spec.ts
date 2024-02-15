import { beforeEach, expect, it, describe } from 'vitest'
import { OrgsRepository } from '@/repositories/orgs-repository'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { GetDogByCityUseCase } from './get-dog-by-city'
import { DogsRepository } from '@/repositories/dogs-repository'
import { InMemoryDogsRepository } from '@/repositories/in-memory/in-memory-dogs-repository'
import { hash } from 'bcryptjs'
import { DogNotFound } from '../errors/dog-not-found'

let orgsRepository: OrgsRepository
let dogsRepository: DogsRepository
let sut: GetDogByCityUseCase

describe('Get dogs by city use case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    dogsRepository = new InMemoryDogsRepository()
    sut = new GetDogByCityUseCase(dogsRepository, orgsRepository)
  })
  it('should be able to get a dog by city', async () => {
    const RJOrg = await orgsRepository.create({
      address: 'RJ',
      email: 'john@example.com',
      password_hash: await hash('123456', 6),
      responsible_name: 'John',
      whatsApp: '21999999999',
      zip_code: '99999999',
    })
    const SPOrg = await orgsRepository.create({
      address: 'SP',
      email: 'john@example.com',
      password_hash: await hash('123456', 6),
      responsible_name: 'John',
      whatsApp: '21999999999',
      zip_code: '99999999',
    })

    await dogsRepository.create({
      orgId: RJOrg.id,
      about: '',
      age: 'AGED',
      energy: 'HIGH',
      environment: 'LARGE',
      independent: 'HIGH',
      name: 'Oddie',
      size: 'LARGE',
    })
    await dogsRepository.create({
      orgId: RJOrg.id,
      about: '',
      age: 'AGED',
      energy: 'HIGH',
      environment: 'LARGE',
      independent: 'HIGH',
      name: 'Oddie',
      size: 'LARGE',
    })
    await dogsRepository.create({
      orgId: SPOrg.id,
      about: '',
      age: 'AGED',
      energy: 'HIGH',
      environment: 'LARGE',
      independent: 'HIGH',
      name: 'Oddie',
      size: 'LARGE',
    })

    const { dogs } = await sut.execute({
      city: 'RJ',
    })

    expect(dogs).toHaveLength(2)
  })

  it('should not get a dogs when city is invalid or dont contain orgs', async () => {
    await expect(() =>
      sut.execute({
        city: 'RJ',
      }),
    ).rejects.toBeInstanceOf(DogNotFound)
  })
})
