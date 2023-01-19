const User = require('../user/userModel')
const Book = require('../book/bookModel')
const Order = require('../order/orderModel')


exports.dashboard = async (req, res) => {
    let totalCustomers = await User.find({ userType: 2 })
    let totalBooks = await Book.countDocuments()
    let totalOrders = await Order.countDocuments()
    res.send({ success: true, status: 200, totalOrders: totalOrders, totalCustomers: totalCustomers.length, totalBooks: totalBooks })
}

