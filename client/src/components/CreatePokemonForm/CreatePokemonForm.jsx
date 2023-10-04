import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import formValidation from "../FormValidation/FormValidation";

import styles from "../CreatePokemonForm/CreatePokemonForm.module.css";

function CreatePokemonForm() {
    const allTypes = useSelector(state=> state.allTypes)
    const dispatch = useDispatch()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    types: "",
    hp: 1,
    attack: 1,
    defense: 1,
    speed: 1,
    height: 1,
    weight: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      formValidation({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const sendPokemons = async (event) => {
    event.preventDefault();
    console.log({ ...formData });

    try {
      const response = await axios.post(
        "http://localhost:3001/pokecards/pokemon",
        formData
      );
      console.log(`response is ${response}`);

      if (response.data) {
        navigate(`/detail/${response.data.id}`);
      } else {
        console.log("server coulnt provide a id for this pokemon");
      }
    } catch (error) {
      console.log("error when creating pokemon", error);
    }
  };

//tracking if any of this conditions are met, we cannot submit our character
  const canSubmit = !formData.name || !formData.image || !formData.types || !formData.hp || !formData.attack || !formData.defense || !formData.speed || !formData.weight || !formData.height || errors.name || errors.types || errors.hp || errors.attack || errors.defense || errors.speed || errors.weight || errors.height ? false : true;

  return (
    <form onSubmit={sendPokemons}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      {errors.name && <p>{errors.name}</p>}

      <label htmlFor="hp">HP:</label>
      <input
        type="number"
        name="hp"
        onChange={handleChange}
        value={formData.hp}
      />
      {errors.hp && <p>{errors.hp}</p>}

      <label htmlFor="attack">attack:</label>
      <input
        type="number"
        name="attack"
        onChange={handleChange}
        value={formData.attack}
      />

      <label htmlFor="defense">Defense</label>
      <input
        type="number"
        name="defense"
        onChange={handleChange}
        value={formData.defense}
      />

      <label htmlFor="speed">speed:</label>
      <input
        type="number"
        name="speed"
        onChange={handleChange}
        value={formData.speed}
      />

      <label htmlFor="height">height:</label>
      <input
        type="number"
        name="height"
        onChange={handleChange}
        value={formData.height}
      />

      <label htmlFor="weight">weight:</label>
      <input
        type="number"
        name="weight"
        onChange={handleChange}
        value={formData.weight}
      />

      <label htmlFor="types">type:</label>
      <input
        type="text"
        name="types"
        onChange={handleChange}
        value={formData.types}
      />

      <label htmlFor="image">Image:</label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={formData.image}
      />

      <button type="submit" disabled={!canSubmit}>Create Pokemon</button>
    </form>
  );
}

export default CreatePokemonForm;
