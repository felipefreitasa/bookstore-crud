import express from 'express'
import PublishingCompaniesController from "../controllers/publishingCompaniesController.js"

const router = express.Router()

router
    .get('/publishingCompanies', PublishingCompaniesController.findPublishingCompaniesList)
    .get('/publishingCompanies/:id', PublishingCompaniesController.findPublishingCompanyById)
    .post('/publishingCompanies', PublishingCompaniesController.registerPublishingCompany)
    .put('/publishingCompanies/:id', PublishingCompaniesController.updatePublishingCompanyById)
    .delete('/publishingCompanies/:id', PublishingCompaniesController.deletePublishingCompanyById)

export default router