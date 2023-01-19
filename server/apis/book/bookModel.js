const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    bookId: { type: Number, default: 0 },
    subcategoryId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'subcategory' },
    categoryId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'category' },
    isForDonation: { type: Boolean, default: false },
    price: { type: Number, default: 0 },
    name: { type: String, default: "" },
    author: { type: String, default: "" },
    image: { type: String, default: "category/default.jpg" },
    status: { type: Boolean, default: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "user" },

    createdAt: { type: Date, default: Date.now }

})


const book = module.exports = mongoose.model('book', bookSchema)
