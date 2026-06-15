import { Schema, model } from "mongoose";

export const ROLES = [
  "ADMIN",
  "TECNICO",
  "USUARIO"
] as const;

export const ESTADOS_USUARIO = [
  "ACTIVO",
  "INACTIVO"
] as const;

const UsuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },

    apellido_paterno: {
      type: String,
      required: true,
    },

    apellido_materno: {
      type: String,
      required: true,
    },

    ci: {
      type: String,
      required: true,
      unique: true,
    },

    estado: {
      type: String,
      enum: ESTADOS_USUARIO,
      default: "ACTIVO",
      required: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    rol: {
      type: String,
      enum: ROLES,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Usuario", UsuarioSchema);