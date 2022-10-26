import books from "../models/Book.js";

class BooksController {

    static findBooksList = (req, res) => {
        books
        .find()
        .populate('author publishingCompany')
        .exec((error, books) => {
            if(!error){
                res.status(200).json(books);
            } else {
                res.status(500).send({message: error.message})
            }
        })
    }

    static findBookById = (req, res) => {
        const {id} = req.params

        books.findById(id, (error, book) => {
            if(!error) {
                res.status(200).json(book)
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

    static registerBook = (req, res) => {
        const book = new books(req.body)

        book.save((error) => {
            if(!error) {
                res.status(201).send({message: 'Livro cadastrado com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            }
        })
    }

    static updateBookById = (req, res) => {
        const {id} = req.params

        books.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(!error) {
                res.status(201).send({message: 'Livro atualizado com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }

    static deleteBookById = (req, res) => {
        const {id} = req.params

        books.findByIdAndDelete(id, (error) => {
            if(!error) {
                res.status(200).send({message: 'Livro excluído com sucesso!'})
            } else {
                res.status(500).send({message: error.message})
            } 
        })
    }
    
}

export default BooksController