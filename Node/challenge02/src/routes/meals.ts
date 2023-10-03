import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'crypto'
import { checkUserIdExists } from '../middlewares/check-user-id-exists'

export async function mealsRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request, reply) => {
    checkUserIdExists(request, reply)
  })

  app.post('/', async (request, reply) => {
    const createMealsSchema = z.object({
      name: z.string(),
      description: z.string(),
      isDiet: z.boolean(),
    })

    const { name, description, isDiet } = createMealsSchema.parse(request.body)

    await knex('meals').insert({
      id: randomUUID(),
      name,
      description,
      isDiet,
      userId: request.cookies.sessionId,
    })

    reply.status(201).send()
  })

  app.get('/', async (request, reply) => {
    const meals = await knex('meals').where({
      userId: request.cookies.sessionId,
    })

    reply.status(200).send({
      meals,
    })
  })

  app.get('/:id', async (request, reply) => {
    const getMealByIdParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getMealByIdParamsSchema.parse(request.params)
    const meal = await knex('meals')
      .select()
      .where({
        id,
        userId: request.cookies.sessionId,
      })
      .first()

    return reply.status(200).send(meal)
  })

  app.delete('/:id', async (request, reply) => {
    const deleteMealByIdParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = deleteMealByIdParamsSchema.parse(request.params)

    await knex('meals')
      .where({
        id,
        userId: request.cookies.sessionId,
      })
      .delete()

    return reply.status(200).send()
  })

  app.patch('/:id', async (request, reply) => {
    const updateMealByIdParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const updateMealBodySchema = z.object({
      name: z.string().nullable(),
      description: z.string().nullable(),
      isDiet: z.boolean().nullable(),
    })

    const { id } = updateMealByIdParamsSchema.parse(request.params)
    const { name, description, isDiet } = updateMealBodySchema.parse(
      request.body,
    )

    const meal = await knex('meals')
      .select()
      .where({
        id,
        userId: request.cookies.sessionId,
      })
      .first()

    if (!meal) {
      return reply.status(404).send({
        error: 'Meal not found.',
      })
    }

    const newMeal = {
      name,
      description,
      isDiet,
    }

    await knex('meals').update(newMeal).where({
      id,
      userId: request.cookies.sessionId,
    })

    return reply.status(200).send({
      newMeal,
    })
  })

  app.get('/metrics', async (request, reply) => {
    const totalQuantity = await knex('meals')
      .select()
      .where({
        userId: request.cookies.sessionId,
      })
      .count()
      .first()

    const totalQuantityInDiet = await knex('meals')
      .select()
      .where({
        userId: request.cookies.sessionId,
        isDiet: true,
      })
      .count()
      .first()
    const totalQuantityOutsideDiet = await knex('meals')
      .select()
      .where({
        userId: request.cookies.sessionId,
        isDiet: false,
      })
      .count()
      .first()

    const bestSequenceMealsInDietCount = await knex('meals')
      .select()
      .where({
        userId: request.cookies.sessionId,
      })
      .orderBy('created_at', 'desc')
      .then((meals) => {
        let bestSequence = 0
        let currentSequence = 0
        meals.forEach((meal) => {
          if (meal.isDiet) {
            currentSequence++
          } else {
            if (currentSequence > bestSequence) {
              bestSequence = currentSequence
            }
            currentSequence = 0
          }
        })
        return bestSequence
      })

    return reply.status(200).send({
      total: totalQuantity,
      inDiet: totalQuantityInDiet,
      outsideDiet: totalQuantityOutsideDiet,
      dietSequence: bestSequenceMealsInDietCount,
    })
  })
}
