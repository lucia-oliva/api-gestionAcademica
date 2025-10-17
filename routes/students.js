const express = require("express");
const router = express.Router();
const Estudiante = require("../models/studentsModel");

// GET /estudiantes con filtro 
router.get("/", async (req, res) => {
  try {
    const { curso } = req.query;
    const filtro = curso ? { cursos: { $in: [curso] } } : {};
    const estudiantes = await Estudiante.find(filtro);
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener estudiantes", error });
  }
});

// GET /estudiantes/:id
router.get("/:id", async (req, res) => {
  try {
    const estudiante = await Estudiante.findById(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el estudiante", error });
  }
});

// POST /estudiantes
router.post("/", async (req, res) => {
  try {
    const nuevoEstudiante = await Estudiante.create(req.body);
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el estudiante", error });
  }
});

// PUT /estudiantes/:id
router.put("/:id", async (req, res) => {
  try {
    const estudianteActualizado = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!estudianteActualizado) {
      return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
    res.status(200).json(estudianteActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar el estudiante", error });
  }
});

// DELETE /estudiantes/:id
router.delete("/:id", async (req, res) => {
  try {
    const estudianteEliminado = await Estudiante.findByIdAndDelete(req.params.id);
    if (!estudianteEliminado) {
      return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }
    res.status(200).json({ mensaje: "Estudiante eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el estudiante", error });
  }
});

module.exports = router;
