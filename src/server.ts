import express, { Request, Response } from 'express';

const app = express(); 
app.use(express.static('public'));

app.get('', (req: Request, res: Response) => res.status(200).send());

app.listen(6100, () => console.log('the server is up!'));