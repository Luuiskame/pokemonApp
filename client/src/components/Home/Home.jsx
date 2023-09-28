//? components
import Card from "../Card/Card"
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"

//axios
import axios from 'axios'

//hooks
import { useEffect,useState } from "react"

function Home(){
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
          try {
            const response = await axios.get('http://localhost:3001/pokecards/pokemon');
            const data = response.data;
            setPokemons(data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        getPokemons();
      }, []);
    return(
        <div>
            <Navbar/>
            <Header/>
            <Card pokemons={pokemons}/>
        </div>
    )
}

export default Home