import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
	res.send('Deu bom!');
});

router.post('/teste', (req, res) => {
	console.log(req.body);
	return res.status(StatusCodes.ACCEPTED).json(req.body);
});




export { router };