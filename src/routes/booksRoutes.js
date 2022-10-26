import express from 'express'
import BooksController from "../controllers/booksController.js"

const router = express.Router()

router
    .get('/books', BooksController.findBooksList)
    .get('/books/:id', BooksController.findBookById)
    .post('/books', BooksController.registerBook)
    .put('/books/:id', BooksController.updateBookById)
    .delete('/books/:id', BooksController.deleteBookById)

export default router