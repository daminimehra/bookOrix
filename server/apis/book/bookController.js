const Book = require('./bookModel')
const helper = require('../../utilities/helpers')


exports.getAll = async (req, resp) => {
    await Book.find(req.body).then(res => {
        resp.send({ success: true, status: 200, message: "All Books loaded", data: res })
    }).catch(err => {
        resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
    })
}



exports.getSingle = async (req, resp) => {
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"

    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await Book.findOne(query).then(res => {
            if (!!res) {
                resp.send({ success: true, status: 200, message: "Book loaded Successfully", data: res })
            }
            else
                resp.send({ success: false, status: 404, message: "No Book Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }


}



exports.addBook = async (req, resp) => {
    let sellerId = null
    if (!!req.decoded && !!req.decoded._id)
        sellerId = req.decoded._id
    let formData = req.body
    let validation = ""
    if (!formData.name)
        validation += "name is required,"
    if (!formData.image)
        validation += "image is required,"
    if (!formData.categoryId)
        validation += "categoryId is required,"
    if (!formData.subcategoryId)
        validation += "subcategoryId is required,"
    if (!formData.isForDonation)
        validation += "isForDonation is required,"
    else {
        if ((formData.isForDonation == false || formData.isForDonation == 'false') && !formData.price)
            validation += "price is required,"
    }

    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let total = await Book.countDocuments()
        let BookData = {
            bookId: total + 1,
            isForDonation: formData.isForDonation,
            price: (formData.isForDonation == false || formData.isForDonation == 'false') ? formData.price : 0,
            categoryId: formData.categoryId,
            subcategoryId: null,
            // subcategoryId: formData.subcategoryId,
            name: formData.name,
            author: formData.author,
            sellerId: sellerId,
            image: "book/" + formData.image
        }
        let book = new Book(BookData)
        let prevBook = await Book.findOne({ $and: [{ name: formData.name }, { author: formData.author }] })
        if (prevBook)
            resp.send({ success: false, status: 409, message: "Book already exists with same name and author" })
        else
            book.save().then(res => {
                resp.send({ success: true, status: 200, message: "Book added Successfully", data: res })

            }).catch(err => {
                resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
            })
    }
}



exports.updateBook = async (req, resp) => {
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await Book.findOne(query).then(async res => {
            if (!!res) {
                if (!!formData.name)
                    res.name = formData.name
                if (!!formData.image)
                    res.image = "book/" + formData.image
                if (!!formData.categoryId)
                    res.categoryId = formData.categoryId
                if (!!formData.subcategoryId)
                    res.subcategoryId = formData.subcategoryId
                if (!!formData.isForDonation)
                    res.isForDonation = formData.isForDonation
                if (!!formData.price && !res.isForDonation)
                    res.price = formData.price
                if (res.isForDonation)
                    res.price = 0
                if (!!formData.author)
                    res.author = formData.author
                if (!!formData.status)
                    res.status = formData.status
                let id = res._id
                let prevBook = await Book.findOne({ $and: [{ name: res.name }, { author: res.author }, { _id: { $ne: id } }] })
                if (prevBook)
                    resp.send({ success: false, status: 409, message: "Book already exists with same name and author" })
                else
                    res.save().then(res => {
                        resp.send({ success: true, status: 200, message: "Book updated Successfully", data: res })

                    }).catch(err => {
                        resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
                    })
            }
            else
                resp.send({ success: false, status: 404, message: "No Book Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }
}

