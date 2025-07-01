import express from "express";
import cors from "cors";
import connectDB from "./dbConnect.js";
import messageRouter from "./router/contactRouter.js";
import adminRouter from "./router/adminRouter.js";

const app = express();
const PORT = 5000;

// ✅ Allow Vercel frontend to access backend
app.use(cors({
  origin: "https://zaid-portfolio-rb3b.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB
connectDB();

// API routes
app.use('/api/v1', messageRouter);
app.use('/api/v2', adminRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
