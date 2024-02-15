import { DogsRepository } from '@/repositories/dogs-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryDogsRepository } from '@/repositories/in-memory/in-memory-dogs-repository'
import { GetDogsUseCase } from './get-dogs'

let sut: GetDogsUseCase
let dogsRepository: DogsRepository

describe('Get dogs use case', () => {
  beforeEach(() => {
    dogsRepository = new InMemoryDogsRepository()
    sut = new GetDogsUseCase(dogsRepository)
  })
  it('should be able to get a dog details', async () => {
    await dogsRepository.create({
      name: 'Oddie',
      about: 'about-fake',
      age: 'YOUNG',
      energy: 'VERY_HIGH',
      environment: 'MEDIUM',
      independent: 'MEDIUM',
      requirements: ['fake-1', 'fake-2'],
      size: 'MEDIUM',
      orgId: 'fake-orgId',
    })
    const agedDog = await dogsRepository.create({
      name: 'Marley',
      about: 'about-fake',
      age: 'AGED',
      energy: 'LOW',
      environment: 'MEDIUM',
      independent: 'MEDIUM',
      requirements: ['fake-1', 'fake-2'],
      size: 'MEDIUM',
      orgId: 'fake-orgId',
    })

    const { dogs } = await sut.execute({
      age: 'AGED',
      city: '',
      energy: 'MEDIUM',
      size: 'SMALL',
    })

    expect(dogs).toHaveLength(1)
    expect(dogs).toEqual([
      expect.objectContaining({
        id: agedDog.id,
      }),
    ])
  })
})
