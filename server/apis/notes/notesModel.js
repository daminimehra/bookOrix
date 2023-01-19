const mongoose = require('mongoose')
const noteSchema = mongoose.Schema({
    noteId: { type: Number, default: 0 },
    categoryId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'category' },
    isFree: { type: Boolean, default: true },
    price: { type: Number, default: 0 },
    title: { type: String, default: "" },
    subject: { type: String, default: "" },
    chapter: { type: String, default: "" },
    bookname: { type: String, default: "" },
    note: { type: String, default: "Notes/default.jpg" },
    status: { type: Boolean, default: false },
    sellerId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "user" },

    createdAt: { type: Date, default: Date.now }

})


module.exports = mongoose.model('note', noteSchema)
