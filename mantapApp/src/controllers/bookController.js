const usecase = require('../usecase/bookUsecase');
const catFact = require('../service/catFactService')

exports.getBookController = async (req) => {
    try {
        console.log("START GETBOOK CONTROLLER"+ req)

        if(Object.keys(req).length === 0) {
            throw new Error("ERROR GOBLOK")
        }
        if(req.panjang === undefined) {
            throw new Error("PANJANG TIDAK BOLEH KOSONG")
        }
        
        let response = await usecase.getBookUsecase(req)

        console.log("END GETBOOK CONTROLLER"+ response)

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