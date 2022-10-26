import mongoose from 'mongoose'

const publishingCompaniesSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true}
    }, 
    {
        versionKey: false
    }
)

const publishingCompanies = mongoose.model('publishingCompanies', publishingCompaniesSchema)

export default publishingCompanies