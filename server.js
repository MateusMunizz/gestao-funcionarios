import express from "express";
import dotenv from "dotenv";
import funcionariosRoutes from "./src/routes/funcionariosRoutes.js";
dotenv.config();


const app = express();
app.use(express.json());
app.use('/funcionarios', funcionariosRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});