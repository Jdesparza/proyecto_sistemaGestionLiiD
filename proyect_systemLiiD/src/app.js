import express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
import departmentsRoutes from  './routes/departments';
import licensesRoutes from  './routes/licenses';
import projectsRoutes from  './routes/projects';


// initialozation
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/departments', departmentsRoutes);
app.use('/api/licenses', licensesRoutes);
app.use('/api/projects', projectsRoutes);

export default app;