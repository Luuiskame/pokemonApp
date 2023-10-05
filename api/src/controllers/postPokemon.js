const {Pokemon, Type} = require('../db')

async function postPokemon(req,res){
    try {
        const {name,image,hp,attack,defense,speed,height,weight,types} = req.body

        if(!name || !image || !hp || !attack || !defense || !height || !weight ||! types){
            res.status(400).send("Faltan datos");
        }
        
        const newPokemon = await Pokemon.create({ 
              
                name, 
                image,
                hp,
                attack,
                defense, 
                speed,
                height, 
                weight,
                types,
            
        })

        newPokemon.addType(types)


        res.status(200).json(newPokemon)
    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


module.exports = postPokemon