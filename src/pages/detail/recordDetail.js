import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Button from "../components/Button";


export default function Records() {
  const { register, handleSubmit, watch, errors } = useForm({
    criteriaMode: "all"
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log(data);
    console.log(watch("visplek"));
    console.log(watch("vissoort"));
    console.log("Uw record is een " + (data.vissoort) + " van " + data.lengte + "mm en een gewicht van " + data.gewicht + "gram gevangen met " + data.aas + ". Met als visplek '" + data.visplek + "' en omschrijving: " + data.omschrijving);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Visplek</label>
      <input name="visplek" ref={register} />

      <label>Vissoort</label>
      <select name="vissoort" ref={register}>
        <option value="geen">geen</option>
        <option value="baars">baars</option>
        <option value="snoek">snoek</option>
        <option value="snoekbaars">snoekbaars</option>
        <option value="voorn">voorn</option>
        <option value="karper">karper</option>
        <option value="paling">paling</option>
      </select>

      <label>
        gevangen met welk Aas?
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
        name="omschrijving"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /^[A-Za-z- -.-!]+$/i,
            message: "Enkel letters"
          },
          maxLength: {
            value: 125,
            message: "too long"
          }
        })}
      />

      <label>Gewicht in grammen.</label>
      <input
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
        Lengte in "mm"
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

      <Button input type="submit">
        Verzenden
      </Button>
    </form>
  );
}
