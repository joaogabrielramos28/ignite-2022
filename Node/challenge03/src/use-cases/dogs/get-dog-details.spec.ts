import { DogsRepository } from '@/repositories/dogs-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryDogsRepository } from '@/repositories/in-memory/in-memory-dogs-repository'
import { GetDogDetailsUseCase } from './get-dog-details'
import { DogNotFound } from '../errors/dog-not-found'

let sut: GetDogDetailsUseCase
let dogsRepository: DogsRepository

describe('Find dog by id use case', () => {
  beforeEach(() => {
    dogsRepository = new InMemoryDogsRepository()
    sut = new GetDogDetailsUseCase(dogsRepository)
  })
  it('should be able to get a dog details', async () => {
    const createdDog = await dogsRepository.create({
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

    const { dog } = await sut.execute({
      id: createdDog.id,
    })

    expect(dog).toEqual(
      expect.objectContaining({
        id: dog.id,
      }),
    )
  })

  it('shouldn`t be able to get details when id is invalid', async () => {
    await expect(() =>
      sut.execute({
        id: 'invalid id',
      }),
    ).rejects.toBeInstanceOf(DogNotFound)
  })
})
