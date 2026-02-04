import express from 'express';
import subjectsRouter from "./db/routes/subjects";
import cors from "cors";
// Create Express application
const app = express();
const PORT = 8000;
if (!process.env.FRONTEND_URL) {
  throw new Error('FRONTEND_URL is not defined');
}
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
// Use JSON middleware
app.use(express.json());
app.use('/api/subjects', subjectsRouter)
// Root GET route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Classroom Management API' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
export default app;
