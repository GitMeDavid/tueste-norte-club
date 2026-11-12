"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function iniciarSesion() {
    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      alert("Error al iniciar sesión: " + error.message);
    } else {
      alert("¡Sesión iniciada correctamente!");
    }
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Acceso a Tueste Norte Club</h1>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />

      <button
        type="button"
        onClick={iniciarSesion}
        className="w-full bg-amber-900 text-white p-2 rounded"
      >
        Iniciar sesión
      </button>

      <a
        href="/registro"
        className="block w-full bg-amber-700 text-white p-2 rounded mt-3 text-center"
      >
        Registrarse
      </a>
    </main>
  );
}
