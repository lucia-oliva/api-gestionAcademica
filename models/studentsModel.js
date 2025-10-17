const mongoose = require("mongoose");

const cursosDisponibles = ["Matemática", "Historia", "Ciencias", "Arte"];

const estudianteSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cursos: [
      {
        type: String,
        enum: cursosDisponibles,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Estudiante", estudianteSchema);
