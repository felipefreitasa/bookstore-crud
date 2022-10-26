import express from 'express'
import booksRoutes from "./booksRoutes.js"
import authorsRoutes from "./authorsRoutes.js"
import publishingCompaniesRoutes from "./publishingCompaniesRoutes.js"

const routes = (app) => {
    app.use(
        express.json(),
        booksRoutes,
        authorsRoutes,
        publishingCompaniesRoutes
    )
}

export default routes