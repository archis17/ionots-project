require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require('./routes/projectRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/candidates", candidateRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error(error.message));