import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Fetch Nearby Gyms (e2e)', async () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })
  it('should be able to fetch nearby a gyms', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Academia do Seu Zé',
        description: 'A melhor academia do bairro.',
        phone: '11999999999',
        latitude: -22.9192465,
        longitude: -43.3808476,
      })
    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Academia do seu João',
        description: 'A melhor academia do bairro.',
        phone: '11999999999',
        latitude: -23.0116916,
        longitude: -43.4372196,
      })

    const response = await request(app.server)
      .get('/gyms/nearby')
      .query({
        latitude: -22.9192465,
        longitude: -43.3808476,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'Academia do Seu Zé',
      }),
    ])
  })
})
