import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Records() {
  const { register, handleSubmit, watch, errors } = useForm({
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
      <input name="visplek" ref={register} placeholder="Het MAS" />

      <label>
        Adres
        <ErrorMessage
          errors={errors}
          name="adres"
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
        placeholder="Hanzestedenplaats 1, 2000 Antwerpen"
        name="adres"
        ref={register({
          required: "This input is required.",
          maxLength: {
            value: 125,
            message: "too long"
          }
        })}
      />

      <label>
        omschrijving
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
        placeholder="Van kant tot water moet je wel even overbruggen"
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

      <label>
        sfeer
        <ErrorMessage
          errors={errors}
          name="sfeer"
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
        placeholder="druk bezocht"
        name="sfeer"
        ref={register({
          pattern: {
            value: /^[A-Za-z- -.-!]+$/i,
            message: "Enkel letters"
          },
          maxLength: {
            value: 50,
            message: "too long"
          }
        })}
      />

      <label>Voornamelijk</label>
      <select name="voornamelijk" ref={register}>
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

      <label>en...</label>
      <select name="en..." ref={register}>
        <option value="geen" selected>
          geen
        </option>
        <option value="baars">baars</option>
        <option value="snoek">snoek</option>
        <option value="snoekbaars" selected>
          snoekbaars
        </option>
        <option value="voorn">voorn</option>
        <option value="karper">karper</option>
        <option value="paling">paling</option>
      </select>

      <button input type="submit">
        +
      </button>
    </form>
  );
}
