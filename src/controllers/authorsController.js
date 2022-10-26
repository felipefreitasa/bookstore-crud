import authors from "../models/Author.js";

class AuthorsController {

    static findAuthorsList = (req, res) => {
        authors.find((error, authors) => {
            if(!error){
                res.status(200).json(authors);
            } else {
                res.status(500).send({message: error.message})
            }
        })
    }

    static findAuthorById = (req, res) => {
        const {id} = req.params

        authors.findById(id, (error, author) => {
            if(!error) {
                res.status(200).json(author)
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

    static registerAuthor = (req, res) => {
        const author = new authors(req.body)

        author.save((error) => {
            if(!error) {
                res.status(201).send({message: 'Autor cadastrado com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            }
        })
    }

    static updateAuthorById = (req, res) => {
        const {id} = req.params

        authors.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(!error) {
                res.status(201).send({message: 'Autor atualizado com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

    static deleteAuthorById = (req, res) => {
        const {id} = req.params

        authors.findByIdAndDelete(id, (error) => {
            if(!error) {
                res.status(200).send({message: 'Autor excluído com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

}

export default AuthorsController