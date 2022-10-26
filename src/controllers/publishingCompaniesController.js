import publishingCompanies from "../models/PublishingCompany.js";

class PublishingCompaniesController {

    static findPublishingCompaniesList = (req, res) => {
        publishingCompanies.find((error, publishingCompanies) => {
            if(!error){
                res.status(200).json(publishingCompanies);
            } else {
                res.status(500).send({message: error.message})
            }
        })
    }

    static findPublishingCompanyById = (req, res) => {
        const {id} = req.params

        publishingCompanies.findById(id, (error, publishingCompany) => {
            if(!error) {
                res.status(200).json(publishingCompany)
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

    static registerPublishingCompany = (req, res) => {
        const publishingCompany = new publishingCompanies(req.body)

        publishingCompany.save((error) => {
            if(!error) {
                res.status(201).send({message: 'Editora cadastrada com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            }
        })
    }

    static updatePublishingCompanyById = (req, res) => {
        const {id} = req.params

        publishingCompanies.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(!error) {
                res.status(201).send({message: 'Editora atualizada com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

    static deletePublishingCompanyById = (req, res) => {
        const {id} = req.params

        publishingCompanies.findByIdAndDelete(id, (error) => {
            if(!error) {
                res.status(200).send({message: 'Editora excluída com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

}

export default PublishingCompaniesController