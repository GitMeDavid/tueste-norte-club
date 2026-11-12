
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function RegistroPage() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registrarUsuario() {
    const { error } = await authClient.signUp.email({
      name: nombre,
      email,
      password,
    });

    if (error) {
      alert("Error al registrarse: " + error.message);
    } else {
      alert("¡Usuario registrado correctamente!");
      router.push("/club/perfil");
      router.refresh();
    }
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Registro en Tueste Norte Club
      </h1>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />

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
        onClick={registrarUsuario}
        className="w-full bg-amber-900 text-white p-2 rounded"
      >
        Crear cuenta
      </button>
    </main>
  );
}
