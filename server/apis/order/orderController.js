const Order = require('./orderModel')
const Book = require('../book/bookModel')
const helper = require('../../utilities/helpers')


exports.getAll = async (req, resp) => {
    if (!!req.decoded && req.decoded.userType == 1 && req.decoded.email!="admin@books.com")
        req.body.userId = req.decoded._id

    console.log(req.body,req.decoded.userType)
    await Order.find(req.body)
    .populate("bookId").populate("userId").populate("sellerId")
    .then(res => {
        resp.send({ success: true, status: 200, message: "All Orders loaded", data: res })
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
        await Order.findOne(query).then(res => {
            if (!!res) {
                resp.send({ success: true, status: 200, message: "Order loaded Successfully", data: res })
            }
            else
                resp.send({ success: false, status: 404, message: "No Order Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }


}



exports.addOrder = async (req, resp) => {
    let formData = req.body
    let validation = ""
    if (!formData.bookId)
        validation += "bookId is required,"
    if (!formData.userId)
        validation += "userId is required,"
    if (!formData.address)
        validation += "address is required,"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {

        let bookData = await Book.findOne({ _id: formData.bookId })
        if (bookData == null) {
            resp.send({ success: false, status: 404, message: "No book Found" })
        } else {
            let total = await Order.countDocuments()
            let orderData = {
                orderId: total + 1,
                amountTotal: bookData.price,
                bookId: formData.bookId,
                userId: formData.userId,
                address: formData.address,
                sellerId: bookData.sellerId
            }
            let order = new Order(orderData)
            order.save().then(res => {
                resp.send({ success: true, status: 200, message: "Order added Successfully", data: res })

            }).catch(err => {
                console.log(err)
                resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
            })

        }
    }
}



exports.updateOrder = async (req, resp) => {
    let userId = null
    if (!!req.decoded && !!req.decoded._id) {
        userId = req.decoded._id
    }
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await Order.findOne(query).then(async res => {
            if (!!res) {
                let isInValid = false
                if (res.sellerId.toString() != userId.toString())
                    isInValid = true
                if (!!formData.orderStatus) {
                    if ((formData.orderStatus == 5 && res.orderStatus > 2) || (formData.orderStatus < res.orderStatus)) {
                        isInValid = true
                    } else {
                        res.orderStatus = formData.orderStatus
                    }
                }
                if (!!formData.trackingId)
                    res.trackingId = formData.trackingId
                if (!!formData.shipmentUrl)
                    res.shipmentUrl = formData.shipmentUrl
                if (isInValid)
                    resp.send({ success: true, status: 200, message: "Cannot Update Order" })
                else
                    res.save().then(res => {
                        console.log(res)
                        resp.send({ success: true, status: 200, message: "Order updated Successfully", data: res })

                    }).catch(err => {
                        resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
                    })
            }
            else
                resp.send({ success: false, status: 404, message: "No Order Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }



}

