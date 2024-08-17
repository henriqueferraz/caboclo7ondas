'use server'

import { auth } from '@/services/auth'
import prisma from '@/lib/prisma'
import { z } from 'zod'
import { deleteTodoSchema, upsertTodoSchema } from '@/services/dashboard/schema'

export async function getUsers() {
  const session = await auth()

  const users = await prisma.user.findMany({
    where: {
      id: session?.user?.id,
    },
  })

  return users[0]?.id || []
}

export async function upsertTodo(input: z.infer<typeof upsertTodoSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Não autorizado',
      data: null,
    }
  }

  if (input.id) {
    const todo = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
    })

    if (!todo || todo.user.length === 0) {
      return {
        error: 'Não encontrado',
        data: null,
      }
    }

    const updatedTodo = await prisma.user.update({
      where: {
        id: session?.user?.id,
      },
      data: {
        todos: {
          update: {
            where: {
              id: input.id,
            },
            data: {
              title: input.title,
              doneAt: input.doneAt,
            },
          },
        },
      },
      include: {
        todos: {
          where: {
            id: input.id,
          },
        },
      },
    })

    return {
      error: null,
      data: updatedTodo.todos[0],
    }
  }

  if (!input.title) {
    return {
      error: 'Título é obrigatório',
      data: null,
    }
  }

  const todo = await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      todos: {
        create: {
          title: input.title,
        },
      },
    },
    include: {
      todos: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      },
    },
  })

  return todo.todos[0]
}

export async function deleteTodo(input: z.infer<typeof deleteTodoSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Não autorizado',
      data: null,
    }
  }

  const todo = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    include: {
      todos: {
        where: {
          id: input.id,
        },
      },
    },
  })

  if (!todo || todo.todos.length === 0) {
    return {
      error: 'Não encontrado',
      data: null,
    }
  }

  await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      todos: {
        delete: {
          id: input.id,
        },
      },
    },
  })

  return {
    error: null,
    data: 'Tarefa excluída com sucesso',
  }
}
