import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";

export default function Records() {
  const { register, handleSubmit, errors } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form_input_file" type="file" />

      <label>Naam</label>
      <input name="naam" ref={register} placeholder="Red Raccoon" />

      <label>Regio</label>
      <input placeholder="Schoten" name="regio" />

      <label>Rank</label>
      <select name="rank" ref={register}>
        <option value="Guppie">Guppie</option>
        <option value="Palingske">Palingske</option>
        <option value="Snoekbaarsje" selected>
          Snoekbaarsje
        </option>
        <option value="Maadje">Maadje</option>
      </select>

      <label>Korte omschrijving</label>
      <input
        placeholder="Tot rust kom ik aan de waterkant"
        name="omschrijving"
      />

      <label>favoriet Aas</label>
      <select name="rank" ref={register}>
        <option value="RedRaccoon" selected>
          Red Raccoon
        </option>
        <option value="Boilies">Boilies</option>
        <option value="Mais">Mais</option>
      </select>

      <label>Favoriete Vis</label>
      <select name="rank" ref={register}>
        <option value="snoekbaars" selected>
          Snoekbaars
        </option>
        <option value="paling">paling</option>
        <option value="karper">karper</option>
      </select>

      <Link to="/account" className="link_button_detail">
        <button onClick={this.addRecord}>+</button>
      </Link>
    </form>
  );
}
