import React, { useState } from 'react';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticación o registro aquí
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isRegistering ? 'Registrar' : 'Ingresar'}</h2>
      <input type="text" placeholder="Nombre de usuario" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">{isRegistering ? 'Registrar' : 'Ingresar'}</button>
      <p onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? '¿Ya tienes cuenta? Ingresar' : '¿No tienes cuenta? Registrar'}
      </p>
    </form>
  );
}

export default Login;