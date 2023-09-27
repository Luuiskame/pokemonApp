const {Pokemon} = require('../db')

async function postPokemon(req,res){
    try {
        const {name,image,hp,attack,defense,speed,height,weight,types} = req.body

        if(!name || !image || !hp || !attack || !defense || !height || !weight){
            res.status(400).send("Faltan datos");
        }
        
        const newPokemon = await Pokemon.findOrCreate({
            where: {
                name,
                image,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
            }
        })


        res.status(200).json(newPokemon)
    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


module.exports = postPokemon