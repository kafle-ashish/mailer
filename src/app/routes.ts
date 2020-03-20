import express from 'express';
import { send } from './controllers';

const router = express.Router();

/* POST methods */
router.post('/', send);

export default router;
