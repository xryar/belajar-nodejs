const express = require('express');
const bookController = require('../controllers/bookController');
var router = express.Router();

const book = new Array()

router.get('/getListBook', async (req, res) => {
    try {
        let response = await bookController.getBookController(req.query)
        res.status(response.status).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/save', (req, res) => {
    book.push(req.query)
    res.send('Buku tersimpan')
})

router.delete('/remove', (req, res) => {
    book.splice(0,1)
    res.send('Buku Berhasil di hapus')
})


module.exports=router