"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// Data Base
const dbconection_1 = __importDefault(require("./database/dbconection"));
// path to access get operations
const usuario_1 = __importDefault(require("./routes/usuario"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// access to server routes
app.use('/usuarios', usuario_1.default);
dbconection_1.default.authenticate().then(() => {
    console.log('Database connected successfully!');
}).catch((err) => {
    console.error('Error connecting to database:', err);
});
app.listen(port, () => {
    console.log(' |> Backend Server Listening From Port || ', port);
});
