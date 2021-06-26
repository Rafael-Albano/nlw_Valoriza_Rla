import 'reflect-metadata';
import express from 'express';

import './database/index';

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server listen port: ${port}`));
