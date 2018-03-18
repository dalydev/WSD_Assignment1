import dotenv from 'dotenv';
import express from 'express';
import hospitalsRouter from './api/hospitals';
import bodyParser from 'body-parser';
//import departmentsRouter from './api/departments';

dotenv.config();

const app = express();

const port = process.env.PORT;

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/hospitals', hospitalsRouter);
//app.use('/api/departments', departmentsRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
