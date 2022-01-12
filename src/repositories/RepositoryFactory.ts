import { BookRepository, BookRepositoryInterface } from './book'

export const Book = Symbol('book')

export interface Repositories {
  [Book]: BookRepositoryInterface
}

export default {
  [Book]: new BookRepository(),
} as Repositories
