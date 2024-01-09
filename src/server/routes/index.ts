import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GastosController } from '../../controllers';

const router = Router();

router.get('/', (req, res) => {
	res.send('Hello World!');
});

router.post('/gastos', GastosController.create);




export { router };