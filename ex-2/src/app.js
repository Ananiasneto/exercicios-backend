import express from "express";

const app = express();
app.use(express.json());
const tasks = [];


app.post("/tasks", (req, res) => {
    const tarefa=req.body
    tasks.push(tarefa);
    res.send(tarefa);
  })

app.get("/tasks", (req, res) => {
    res.send(tasks);
})  
app.listen(5000, () => console.log(`rodando na porta 5000`));