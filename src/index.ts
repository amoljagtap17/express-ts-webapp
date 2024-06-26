import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send({ message: "Hello, TypeScript Express!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
