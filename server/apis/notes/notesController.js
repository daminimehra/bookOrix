const Notes = require('./notesModel')
const helper = require('../../utilities/helpers')


exports.getAll = async (req, resp) => {
    console.log("notes Body",req.body)
    await Notes.find(req.body).populate("sellerId").populate("categoryId").then(res => {
        resp.send({ success: true, status: 200, message: "All Notess loaded", data: res })
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
        await Notes.findOne(query).then(res => {
            if (!!res) {
                resp.send({ success: true, status: 200, message: "Notes loaded Successfully", data: res })
            }
            else
                resp.send({ success: false, status: 404, message: "No Notes Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }


}



exports.addNotes = async (req, resp) => {
    let sellerId = null
    if (!!req.decoded && !!req.decoded._id)
        sellerId = req.decoded._id
    let formData = req.body
    let validation = ""
    if (!formData.title)
        validation += "title is required,"
    if (!formData.subject)
        validation += "subject is required,"
    if (!formData.chapter)
        validation += "chapter is required,"
    if (!formData.bookname)
        validation += "bookname is required,"
    if (!formData.categoryId)
        validation += "categoryId is required,"

    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let total = await Notes.countDocuments()
        console.log(formData)
        let NotesData = {
            notesId: total + 1,
            isFree: formData.isFree,
            price: formData.price,
            categoryId: formData.categoryId,
            title: formData.title,
            subject: formData.subject,
            sellerId: sellerId,
            chapter:formData.chapter,
            bookname:formData.bookname,
            note: "note/" + formData.image
        }
        console.log(NotesData)
        let Notesold = new Notes(NotesData)
        let prevNotes = await Notes.findOne({ $and: [{ title: formData.title }, { sellerId: formData.sellerId }] })
        if (prevNotes)
            resp.send({ success: false, status: 409, message: "Notes already exists with same title and users" })
        else
            Notesold.save().then(res => {
                console.log(res)
                resp.send({ success: true, status: 200, message: "Notes added Successfully", data: res })

            }).catch(err => {
                console.log(err)
                resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
            })
    }
}



exports.updateNotes = async (req, resp) => {
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await Notes.findOne(query).then(async res => {
            if (!!res) {
                // if (!!formData.name)
                //     res.name = formData.name
                // if (!!formData.categoryId)
                //     res.categoryId = formData.categoryId
                // if (!!formData.subcategoryId)
                //     res.subcategoryId = formData.subcategoryId
                // if (!!formData.isForDonation)
                //     res.isForDonation = formData.isForDonation
                // if (!!formData.price && !res.isForDonation)
                //     res.price = formData.price
                // if (res.isForDonation)
                //     res.price = 0
                // if (!!formData.author)
                //     res.author = formData.author
                if (!!formData.status)
                    res.status = formData.status
                let id = res._id
                // let prevNotes = await Notes.findOne({ $and: [{ name: res.name }, { author: res.author }, { _id: { $ne: id } }] })
                // if (prevNotes)
                //     resp.send({ success: false, status: 409, message: "Notes already exists with same name and author" })
                // else
                    res.save().then(res => {
                        resp.send({ success: true, status: 200, message: "Notes updated Successfully", data: res })

                    }).catch(err => {
                        resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
                    })
            }
            else
                resp.send({ success: false, status: 404, message: "No Notes Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }
}

