const { default: axios } = require("axios")

exports.getRandomFacts = async (maxLength)=> {
    console.log("Starting getRandomFact")
    const response = await axios.get('https://catfact.ninja/fact', {
        params:{
            max_length:40
        }
    })
    .then((cat)=> {
        console.log(cat.data.fact)
        return cat.data.fact
    })

    console.log("END getRandomFact")
    return response;   
}

exports.getListFact = ()=> {

}