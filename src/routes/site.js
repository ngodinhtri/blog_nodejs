const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')


router.use('/search', siteController.search)
router.use('/:slug', (req, res) => {
    res.send('Trang khong ton tai')
})
router.use('/', siteController.index)

module.exports = router