const express = require('express')
const router = express.Router()
const userController = require('../controllers/user/userCotroller')


router.get('/pageNotFound',userController.pageNotFound)
router.get('/',userController.loadHomepage)





module.exports = router