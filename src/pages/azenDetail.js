import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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

      <label>Drijvend</label>
      <select name="drijvend" ref={register}>
        <option value="ja" selected>
          ja
        </option>
        <option value="nee">nee</option>
      </select>

      <label>
        Haaksoort
        <ErrorMessage
          errors={errors}
          name="haaksoort"
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
        placeholder="2 keer 3"
        name="haaksoort"
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
        placeholder="Een handige hardbait die goed opvalt."
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
        placeholder="8 gram"
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
        placeholder="9"
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

      <button input type="submit">
        +
      </button>
    </form>
  );
}
