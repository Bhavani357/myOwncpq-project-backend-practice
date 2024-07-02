import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route';

const app = express();
const API_VERSION = 'v1';

app.use(express.json());
app.use(cors());
app.use(`/${API_VERSION}/api/auth`, authRoutes);

export default app;
