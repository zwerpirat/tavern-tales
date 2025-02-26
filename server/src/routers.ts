import express, { Request, Response, Router } from 'express';
import NPC from './models/npc';


const router: Router = express.Router();


// Define 4 Routes for NPCs: 
// /favorites (GET): show all npcs in database
// /favorites (POST): add an npc to database
// /favorites (POST): add an npc to favorites list
// /favorites/:npcId (DELETE): remove npc from favorites list

// get all the npcs stored in the database
router.get('/npcs', async (req: Request, res: Response) => {
    try{
        const npctemplates = await NPC.findAll();
        res.status(200).json(npctemplates)

    } catch (error){
        console.log(error); 
        res.status(400).json({error:error})
    }
});

// add a npc to the database
// should return a 400 if parameter is missing 

router.post();

// delete npc from database
router.delete();

export default router; 