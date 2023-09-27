
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";
const { Type } = require("../db")

async function getTypes(req, res) {
    try {
       
        const isEmpty = await Type.count() === 0;

        if (isEmpty) {
        
            const response = await axios(URL);
            const data = response.data;

            const pokemonTypes = {};
            data.results.forEach(pokemonType => {
                pokemonTypes[pokemonType.name] = pokemonType.name;
            });

           
            await savePokemonTypesToDatabase(Object.values(pokemonTypes));
        }

       
        const typesFromDatabase = await Type.findAll({
            attributes: ['name'],
            // raw: true, 
        });

        
        const typesObject = {};
        typesFromDatabase.forEach(type => {
            typesObject[type.name] = type.name;
        });

        res.status(200).json(typesObject);
    } catch (error) {
        res.status(500).json({ error: "An error happened", details: error.message });
    }
}

// Función para guardar los tipos en la base de datos
async function savePokemonTypesToDatabase(types) {
    try {
        // Iterar sobre los tipos y crear registros en la base de datos
        for (const type of types) {
            await Type.create({ name: type });
        }
        console.log('Tipos de Pokémon guardados en la base de datos.');
    } catch (error) {
        console.error('Error al guardar tipos de Pokémon en la base de datos:', error);
    }
}





module.exports = getTypes