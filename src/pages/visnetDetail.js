import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";

export default function Records() {
  const { register, handleSubmit, watch, errors } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log(data);
    console.log(watch("visplek"));
    console.log(watch("vissoort"));
    console.log(
      "Uw record is een " +
        data.vissoort +
        " van " +
        data.lengte +
        "mm en een gewicht van " +
        data.gewicht +
        "gram gevangen met " +
        data.aas +
        ". Met als visplek '" +
        data.visplek +
        "' en omschrijving: " +
        data.omschrijving
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form_input_file" type="file" />

      <label>Visplek</label>
      <input name="visplek" ref={register} placeholder="Het MAS" />

      <label>Vissoort</label>
      <select name="vissoort" ref={register}>
        <option value="geen">geen</option>
        <option value="baars">baars</option>
        <option value="snoek">snoek</option>
        <option value="snoekbaars" selected>
          snoekbaars
        </option>
        <option value="voorn">voorn</option>
        <option value="karper">karper</option>
        <option value="paling">paling</option>
      </select>

      <label>
        Gevangen met welk aas?
        <ErrorMessage
          errors={errors}
          name="aas"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
      </label>
      <input
        placeholder="Red Racoon"
        name="aas"
        ref={register({
          required: "This input is required.",
          maxLength: {
            value: 125,
            message: "too long"
          }
        })}
      />

      <label>
        Korte omschrijving
        <ErrorMessage
          errors={errors}
          name="omschrijving"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
      </label>
      <input
        placeholder="Laatste stek, bij de tweede worp vloog hij op de plug."
        name="omschrijving"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /^[A-Za-z- -.-!]+$/i,
            message: "Enkel letters"
          },
          maxLength: {
            value: 150,
            message: "too long"
          }
        })}
      />

      <label>Gewicht in grammen.</label>
      <input
        placeholder="nvt"
        name="gewicht"
        type="number"
        ref={register({
          minLength: {
            value: 2,
            message: "Minimaal twee cijfers"
          },
          maxlength: {
            value: 6,
            message: "Maximaal zes cijfers"
          }
        })}
      />

      <label>
        Lengte in "cm"
        <ErrorMessage
          errors={errors}
          name="lengte"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
      </label>
      <input
        name="lengte"
        placeholder="55"
        ref={register({
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          minLength: {
            value: 3,
            message: "This input must exceed 10 characters"
          }
        })}
      />

      <Link to="/visnet" className="link_button_detail">
        <button onClick={this.addRecord} type="submit">
          +
        </button>
      </Link>
    </form>
  );
}
