# API Gestión Académica

## Descripción

API Gestión Académica es un servicio REST construido con Node.js y Express que permite gestionar registros de estudiantes y los cursos en los que están inscriptos. Provee operaciones CRUD completas, filtros por curso y se integra con MongoDB Atlas.

## Características

- Registro, consulta, actualización y eliminación de estudiantes (CRUD completo).
- Filtro de estudiantes por curso disponible mediante parámetros de consulta.
- Validaciones de esquema con Mongoose, incluyendo unicidad del correo y cursos definidos en ENUM.

## Tecnologías Utilizadas

- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Base de Datos:** [MongoDB](https://www.mongodb.com/) con [Mongoose](https://mongoosejs.com/)
- **Extras:** [dotenv](https://github.com/motdotla/dotenv),[cors](https://github.com/expressjs/cors),[Nodemon](https://nodemon.io/).

## Requisitos 

* Node.js: v14 o superior.
* MongoDB: Base de datos local o en la nube.

## Cómo Instalar y Usar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/lucia-oliva/api-gestionAcademica.git
   cd api-gestionAcademica
   ```
2. **Instalar dependencias**
   ```bash
   npm install
   ```
3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido de ejemplo:
   ```env
   MONGO_URI=<cadena-de-conexion-de-mongodb-atlas>
   PORT=3000
   ```
4. **Ejecutar el proyecto**
   - Desarrollo con recarga automática:
     ```bash
     npm run dev
     ```
   - Producción:
     ```bash
     npm start
     ```

La API estará disponible en `http://localhost:3000` (o el puerto definido en `PORT`).

## Estructura del Proyecto

```
api-gestionAcademica/
├── app.js                 # Punto de entrada del servidor Express
├── config/
│   └── db.js              # Configuración y conexión a MongoDB
├── models/
│   └── studentsModel.js   # Esquema Mongoose para estudiantes
├── routes/
│   └── students.js        # Rutas CRUD para /estudiantes
├── package.json           # Dependencias y scripts npm
├── vercel.json            # Configuración para despliegue en Vercel
└── README.md              # Documentación del proyecto
```

## API Endpoints

| Método | Endpoint              | Descripción                                     |
|--------|-----------------------|-------------------------------------------------|
| GET    | `/estudiantes`        | Obtiene todos los estudiantes o filtra por curso (`?curso=`). |
| GET    | `/estudiantes/:id`    | Obtiene un estudiante por su identificador.     |
| POST   | `/estudiantes`        | Crea un nuevo estudiante.                       |
| PUT    | `/estudiantes/:id`    | Actualiza los datos de un estudiante existente. |
| DELETE | `/estudiantes/:id`    | Elimina un estudiante por su identificador.     |

## Próximos Pasos

- Incorporar la integracion con el front-end del sistema.

## Créditos y despliegue

Proyecto desarrollado por **[Ana Lucia Oliva](https://github.com/lucia-oliva)**

* Disponible en Vercel en el siguiente link: https://api-gestion-academica-7k3vviela-lucia-olivas-projects.vercel.app/ 

