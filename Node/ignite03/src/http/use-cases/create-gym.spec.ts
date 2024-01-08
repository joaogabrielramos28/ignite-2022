import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })
  it('Should be able to create Gym', async () => {
    const { gym } = await sut.execute({
      title: 'Gym',
      latitude: -22.9192465,
      longitude: -43.3808476,
      phone: null,
      description: null,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
