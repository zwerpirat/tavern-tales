Commands

BACKEND 
Starting Application / Server
npm run build // change scripts in package.json beforehand accordingly
npm start

PACKAGEMANAGEMENT
npm init -y // fuer die initialisierung von package.json
npm install express
npm install -D express 
npm install -D typescript
npm install express sequelize typescript @types/express @types/node pg pg-hstore
npm install -D typescript @types/express @types/node ts-node nodemon
tsc --init   // creating a tsconfig.json file with all recommended environment settings 

In package.json / scripts
    "build": "tsc", // compiling TS to JS 
    "start": "node dist/index.js"  // running server on js file


tsconfig.json settings: 
{
  "compilerOptions": {

    /* Projects */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include":["src/**/*"],
  "exclude":["node_modules"]
}

FRONTEND: (react)

COMMANDS: 

npm install tailwindcss @tailwindcss/vite
npm create vite@latest client -- --template react
cd client
npm install
npm run dev

//https://publicapis.io/bandcamp-api?form=MG0AV3


Codesnippets, to be deleted:

BACKEND:
            // Variant 1 to edit npcs
            // const result = await NPC.update(req.body, {where: {id}});
            // if (result.length == 1 && result[0] === 1) {
            //     const editedNPC = await NPC.findByPk(id);
            //     res.json({editedNPC});
            // } else {
            //     res.status(404).json({error:'Could not find your buddy!'});
            // }

FRONTEND:
  // const [npcs, setNPCs] = useState([]);
  // const [npcOfTheDay, setNPCOfTheDay] = useState({});

    // debounce search term to prevent making too many API requests
    // useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

    // useEffect(() => {
    //   fetchMovies(debouncedSearchTerm);
    // }, [debouncedSearchTerm]);


    FAVORITE:
        onClick={() => setIsFavorite(true)}
        ondblclick={() => setIsFavorite(false)}