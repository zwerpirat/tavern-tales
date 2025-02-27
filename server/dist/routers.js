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
// /favorites (GET): show all npcs in database
// /favorites (POST): add an npc to database
// /favorites (POST): add an npc to favorites list
// /favorites/:npcId (DELETE): remove npc from favorites list
// get all the npcs stored in the database
router.get('/npcs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
// should return a 400 if parameter is missing 
// router.post();
// // delete npc from database
// router.delete();
exports.default = router;
