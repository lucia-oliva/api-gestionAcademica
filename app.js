const express = require("express");
const cors = require("cors");
const dbconnect = require("./config/db");
const estudiantesRoutes = require("./routes/students");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/estudiantes", estudiantesRoutes);
app.get("/", (req, res) => {
  res.send("Bienvenido a API Gestión Académica");
});

dbconnect()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Servidor corriendo en el puerto " + (process.env.PORT || 3000));
    });
  })
  .catch(() => {
    console.log("No se pudo iniciar el servidor debido a un error en la base de datos");
  });
