import express from "express";
import cors from "cors";
import connectDB from "./dbConnect.js";
import messageRouter from "./router/contactRouter.js";
import adminRouter from "./router/adminRouter.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/v1',messageRouter)

app.use('/api/v2', adminRouter)




// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
