"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_1 = __importDefault(require("./routes/categories"));
const libraryItems_1 = __importDefault(require("./routes/libraryItems"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use(express_1.default.json());
app.use("/api/categories", categories_1.default);
app.use("/api/libraryItems", libraryItems_1.default);
app.use("/api/users", users_1.default);
app.use("/api/auth", auth_1.default);
const PORT = 5689;
app.listen(PORT, () => console.log("listening on port " + PORT));
