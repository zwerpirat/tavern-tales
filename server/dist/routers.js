"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const npc_1 = __importDefault(require("./models/npc"));
const router = express_1.default.Router();
// Define 4 Routes for NPCs: 
// /npc (GET): show all npcs in database
// /npc (POST): add an npc to database
// /npc (POST): add an npc to favorites list
// /npc/:npcId (DELETE): remove npc from favorites list
// get all the npcs stored in the database
router.get('/npc', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const npctemplates = yield npc_1.default.findAll();
        res.status(200).json(npctemplates);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error: error });
    }
}));
// add a npc to the database
// should return a 400 if a parameter (name, race, location, description) is missing 
router.post('/npc', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // error handling if any required parameter is missing as an input from the user
        const missingParameters = [];
        if (!req.body.name)
            missingParameters.push('name');
        if (!req.body.race)
            missingParameters.push('race');
        if (!req.body.location)
            missingParameters.push('location');
        if (!req.body.description)
            missingParameters.push('description');
        if (missingParameters.length > 0) {
            res.status(400).json({
                error: 'Missing some required input, please fill in all the fields',
                missingParameters
            });
            // if no parameters is missing, new NPC is created   
        }
        else {
            const npc = yield npc_1.default.create(req.body);
            yield npc.save();
            res.status(201).json(npc);
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// // delete npc from database
// router.delete('/npc/:npcId', async (req: Request<{ npcId: number }>, res: Response) => {
//     const npcId: number = req.params.npcId;
//     try {
//         const deleteCount = NPC.destroy({ where: { id: npcId } });
//         res.json({ deleteCount });
//     } catch (error) {
//         console.log(error);
//     }
// });
exports.default = router;
