const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//? handlers
const getAllPokemon = require('../controllers/getPokemon')
const getPokemonById = require('../controllers/getPokemonById')
const getPokemonByName = require('../controllers/getPokemonByName')
const getTypes = require('../controllers/getTypes')

//post handlers
const postPokemon = require('../controllers/postPokemon')

const router = Router();

// Configurar los routers
router.get('/pokemon/name', getPokemonByName)
router.get('/pokemon', getAllPokemon)
router.get('/pokemon/:id', getPokemonById)
router.get('/type', getTypes)
// router.get('/pokemondb', getPokemonDb)

//post 
router.post('/pokemon',postPokemon)
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
