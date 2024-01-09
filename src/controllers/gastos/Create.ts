import { Request, Response } from 'express';


interface IGasto {
	nome: string;
}

export const create = (req:Request<{},{},IGasto>, res:Response) => {

	console.log(req.body);

	res.send('Create!');
};