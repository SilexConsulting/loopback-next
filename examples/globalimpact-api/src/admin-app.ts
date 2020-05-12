import {Request, Response} from 'express';
import express from 'express';
import path from 'path';

const adminApp = express();

adminApp.use(express.static(path.resolve(__dirname, '../admin/build')))

// your existing Express routes
adminApp.get('/', function (_req: Request, res: Response) {
  res.sendFile(path.join(__dirname + '../admin/build/index.html'));
});

export {adminApp};
