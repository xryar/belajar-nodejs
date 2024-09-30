const catFact = require('../service/catFactService')

exports.getBookUsecase = async (req)=> {
    try {
        console.log("START GETBOOK USECASE" + req)

        const catResp = await catFact.getRandomFacts(req.panjang);

        req.catFact = catResp

        let response = {
            status: 200,
            data: req,
            message: "Berhasil mendapatkan list buku"
        }

        console.log("END GETBOOK USECASE" + response)
        return response
    } catch (error) {
        console.error(error)
        return {
            status: 500,
            message: error.message,
            data: null
        }
    }
}