import {Request, Response} from 'express';
import express from 'express';
import path from 'path';

const adminApp = express();

adminApp.set('views', path.resolve(__dirname, '../src//views'));
adminApp.set('view engine', 'pug')

// your existing Express routes
adminApp.get('/challenges', function (_req: Request, res: Response) {
  res.render('challenges/index', { 
    title: 'Challenges | GI Admin', 
    pageTitle: 'Challenges',
  })
});
adminApp.get('/challenges/:challengeId', function (_req: Request, res: Response) {
  res.render('challenges/edit', { 
    id: _req.params.challengeId,
    title: 'Edit Challenge | GI Admin', 
    pageTitle: 'Edit Challenge',
  })
});

export {adminApp};
