import express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
import departmentsRoutes from  './routes/departments';


// initialozation
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/departments', departmentsRoutes);

export default app;