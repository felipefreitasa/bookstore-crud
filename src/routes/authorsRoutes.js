import express from 'express'
import AuthorsController from "../controllers/authorsController.js"

const router = express.Router()

router
    .get('/authors', AuthorsController.findAuthorsList)
    .get('/authors/:id', AuthorsController.findAuthorById)
    .post('/authors', AuthorsController.registerAuthor)
    .put('/authors/:id', AuthorsController.updateAuthorById)
    .delete('/authors/:id', AuthorsController.deleteAuthorById)

export default router