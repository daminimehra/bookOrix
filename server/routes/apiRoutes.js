const router = require('express').Router()
const helper = require('../utilities/helpers')


//controllers
const userController = require('../apis/user/userController')

const categoryController = require('../apis/category/categoryController')
const subcategoryController = require('../apis/subcategory/subcategoryController')
const bookController = require('../apis/book/bookController')
const notesController = require('../apis/notes/notesController')
const orderController = require('../apis/order/orderController')
const dashboardController = require('../apis/dashboard/dashboardController')

//auth
router.post('/user/login', userController.login)


//user
router.post('/user/add', userController.addUser)
router.post('/user/update', userController.updateUser)

//category
router.post('/category/all', categoryController.getAll)
router.post('/category/single', categoryController.getSingle)

//subcategory
router.post('/subcategory/all', subcategoryController.getAll)
router.post('/subcategory/single', subcategoryController.getSingle)

//book
router.post('/book/all', bookController.getAll)
router.post('/book/single', bookController.getSingle)



//book
router.post('/notes/all', notesController.getAll)
router.post('/notes/single', notesController.getSingle)

router.use(require('../middleware/tokenChecker'))

//dashboard
router.get('/dashboard', dashboardController.dashboard)


//customer
router.post('/user/all', userController.getAll)
router.post('/user/single', userController.getSingle)


//category

router.post('/category/add', helper.uploadImageFun.single('category_image'), categoryController.addCategory)
router.post('/category/update', helper.uploadImageFun.single('category_image'), categoryController.updateCategory)

//subcategory

router.post('/subcategory/add', helper.uploadImageFun.single('subcategory_image'), subcategoryController.addSubcategory)
router.post('/subcategory/update', helper.uploadImageFun.single('subcategory_image'), subcategoryController.updateSubcategory)

//book 

router.post('/notes/add', helper.uploadImageFun.single('note_image'), notesController.addNotes)
router.post('/notes/update', notesController.updateNotes)
router.post('/book/add', helper.uploadImageFun.single('book_image'), bookController.addBook)
router.post('/book/update', helper.uploadImageFun.single('book_image'), bookController.updateBook)

//customer
router.post('/order/all', orderController.getAll)
router.post('/order/single', orderController.getSingle)
router.post('/order/add', orderController.addOrder)
router.post('/order/update', orderController.updateOrder)



router.all('*', (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router