import express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
import departmentsRoutes from  './routes/departments';
import licensesRoutes from  './routes/licenses';
import projectsRoutes from  './routes/projects';
import staffsRoutes from  './routes/staffs';
import staff_projectsRoutes from  './routes/staff_projects';


// initialozation
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/departments', departmentsRoutes);
app.use('/api/licenses', licensesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/staffs', staffsRoutes);
app.use('/api/staff_projects', staff_projectsRoutes);

export default app;