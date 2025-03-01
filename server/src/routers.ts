import express, { Request, Response, Router } from 'express';
import NPC from './models/npc';
import uploadDirectory from './app';
import multer from 'multer';

const router: Router = express.Router();

const imageStore = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, uploadDirectory);
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const filter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
    if(file.mimetype.startsWith('image/')) {
        callback(null, true);
    } else {
        callback( new Error('Not an image, buddy!'));
    }
};

const uploadHandler = multer({
    storage: imageStore,
    fileFilter: filter,
    limits: {
        fileSize: 5 * 1024 * 1024 // ~5MB
    }
})

// Define 4 Routes for NPCs: 
// /npc (GET): show all npcs in database
// /npc (POST): add an npc to database
// /npc (POST): add an npc to favorites list
// TODO: implement favorite feature in backend or frontend?
// /npc/:npcId (DELETE): remove npc from database
// /npc/:npcId (PUT): edit an already existing npc

// get all the npcs stored in the database
router.get('/npc', async (req: Request, res: Response) => {
    try {
        const npctemplates = await NPC.findAll();
        res.status(200).json(npctemplates)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error })
    }
});

// add a npc to the database
// should return a 400 if a parameter (name, race, location, description) is missing 

router.post('/npc', uploadHandler.single('image'), async (req: Request, res: Response) => {
    try {
        // error handling if any required parameter is missing as an input from the user
        const missingParameters = [];
        if (!req.body.name) missingParameters.push('name');
        if (!req.body.race) missingParameters.push('race');
        if (!req.body.category) missingParameters.push('category');
        if (!req.body.location) missingParameters.push('location');
        if (!req.body.description) missingParameters.push('description');
        if (!req.body.favorite) missingParameters.push('favorite');

        if (missingParameters.length > 0) {
            res.status(400).json({
                error: 'Missing some required input, please fill in all the fields',
                missingParameters
            });
            // if no parameters is missing, new NPC is created   
        } else {
            const npc = await NPC.create(req.body);
            if(req.file) {
                npc.image = req.file.originalname;
            } else {
                npc.image = '';
            }
            await npc.save();
            res.status(201).json(npc);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete npc from database 
router.delete('/npc/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    if(id==='undefined') {
        res.status(400).json({error: 'Invalid ID'});
        return;
    }

    try {
        const deleteCount = NPC.destroy({ where: { id: id } });
        res.json({ deleteCount });
    } catch (error) {
        console.log(error);
    }
});

// edit already existing npc because they aren't good enough, that's why they have to be edited, fact.
// they should be grateful that they are not killed instead 
router.put('/npc/:id', async (req: Request, res: Response) => {
    {
        const id = req.params.id;
        try {
            const npc = await NPC.findByPk(id);
            if(npc) {
                await npc.update(req.body);
                await npc.save();
                res.status(201).json(npc);
            } else {
                res.status(404).json({error:'Buddy not found'});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
})

export default router; 