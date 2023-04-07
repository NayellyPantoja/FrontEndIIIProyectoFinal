import React, { useState } from "react";

const Form = ({ data }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    const usernameValido = validarUsername(userName);
    const emailValido = validarEmail(email);

    if (!usernameValido || !emailValido) {
      setMessage("**Por favor verifique su información nuevamente**");
      setMessageColor("red");
      setShowMessage(true);
    } else {
      setMessage(
        `**Gracias ${userName}, te contactaremos cuanto antes vía mail**`
      );
      setMessageColor("green");
      setShowMessage(true);
      console.log(`Nombre: ${userName}`);
      console.log(`Email: ${email}`);
    }
  };
  const validarEmail = (email) =>
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email);
  const validarUsername = (userName) => userName.length > 5;
  const [userName, setUserName] = useState("");
  const onChangeUserName = (e) => {
    const capitalizedValue =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setUserName(capitalizedValue);
  };
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => setEmail(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
        />
        <button type="submit">Enviar</button>
      </form>
      {showMessage && <div style={{ color: messageColor }}>{message}</div>}
    </div>
  );
};

export default Form;
