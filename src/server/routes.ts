import * as express from 'express';
import DB from './DB';
import chirps from './DB/chirps';

const router = express.Router();

router.get('/api/hello', (_req, res, _next) => {
    res.json('World');
});
router.get('/api/chirps',async (_req, res) => {
try {
res.json(await DB.chirps.all());
} catch (e) {
    console.log(e);
    res.sendStatus(500);
}
});
router.get('/api/chirps/:id',async (req, res) => {
    try {
    res.json(await DB.chirps.one(req.params.id))[0];
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
    });

    router.get('/api/chirps/:userid',async (req, res) => {
        try {
        res.json(await DB.chirps.insert(req.params.userid))[0];
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
        });
        router.get('/api/chirps/:message',async (req, res) => {
            try {
            res.json(await DB.chirps.update(req.params.message))[0];
            } catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
            });
            router.get('/api/chirps/:id',async (req, res) => {
                try {
                res.json(await DB.chirps.destroy(req.params.id))[0];
                } catch (e) {
                    console.log(e);
                    res.sendStatus(500);
                }
                });

    router.post('/api/chirps', async (_req, res) => {
        DB.chirps.all();
        res.sendStatus(500);
    });

export default router;