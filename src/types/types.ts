import { ReturnTypeWithoutPromise } from '@/types/return-type-without-promise'
import { getUserTodos } from '@/services/dashboard/actions'

export type Todo = ReturnTypeWithoutPromise<typeof getUserTodos>[0]
