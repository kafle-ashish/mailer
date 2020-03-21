import express from 'express';
import { send, test } from './controllers';

const router = express.Router();

/* POST methods */
router.post('/', send);
router.get('/test', test);

export default router;
