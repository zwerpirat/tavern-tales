import express, { Request, Response, Router } from 'express';
import NPC from './models/npc';


const router: Router = express.Router();


// Define 4 Routes for NPCs: 
    // /npc (GET): show all npcs in database
    // /npc (POST): add an npc to database
    // /npc (POST): add an npc to favorites list
    // /npc/:npcId (DELETE): remove npc from favorites list

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

router.post('/npc', async (req: Request, res: Response) => {
    try {
        // error handling if any required parameter is missing as an input from the user
        const missingParameters = []; 
        if(!req.body.name) missingParameters.push('name');
        if(!req.body.race) missingParameters.push('race');
        if(!req.body.location) missingParameters.push('location');
        if(!req.body.description) missingParameters.push('description');

        if(missingParameters.length > 0){
            res.status(400).json({
                error: 'Missing some required input, please fill in all the fields',
                missingParameters
            });
        // if no parameters is missing, new NPC is created   
        } else {
            const npc = await NPC.create(req.body);
            await npc.save();
            res.status(201).json(npc);
        }
    } catch (error) {
        console.log(error);
    }
});

// // delete npc from database
router.delete('/npc/:npcId', async (req: Request<{ npcId: number }>, res: Response) => {
    const npcId: number = req.params.npcId;
    try {
        const deleteCount = NPC.destroy({ where: { id: npcId } });
        res.json({deleteCount});
    } catch (error) {
        console.log(error);
    }
});

export default router; 