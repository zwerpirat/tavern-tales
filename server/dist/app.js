'use strict';
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
const routers_1 = __importDefault(require("./routers"));
const modelindex_1 = __importDefault(require("./models/modelindex"));
const cors_1 = __importDefault(require("cors"));
// Create a new express application instance
const app = (0, express_1.default)();
// Set the network port
const port = 3000;
// cors configurations
const corsOptions = {
    origin: '*', // Allow everything for now
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use('/', routers_1.default);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield modelindex_1.default.sync();
            // Start the Express server
            app.listen(port, () => {
                console.log(`The server is now running at http://localhost:${port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
startServer();
