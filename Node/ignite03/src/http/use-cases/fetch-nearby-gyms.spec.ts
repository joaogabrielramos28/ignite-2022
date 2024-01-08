import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('Should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      latitude: -22.9192465,
      longitude: -43.3808476,
      phone: null,
      description: null,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      latitude: -23.0116916,
      longitude: -43.4372196,
      phone: null,
      description: null,
    })

    const { gyms } = await sut.execute({
      userLatitude: -22.9192465,
      userLongitude: -43.3808476,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
