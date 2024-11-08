const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { handleChat } = require("./src/controllers/controllers"); 

require("dotenv").config();

const PORT = process.env.PORT || 5500;
const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/uploads", upload.single("file"), (req, res) => {
  try {
    const xlsx = require("xlsx");
    const workBook = xlsx.read(req.file.buffer);
    const sheetName = workBook.SheetNames[0];
    const sheet = workBook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    req.app.locals.userData = jsonData; 
    res.json({
      message: "File uploaded and converted to JSON successfully",
      data: jsonData,
    });
  } catch (error) {
    console.error("Error processing the file:", error.message);
    res
      .status(500)
      .json({ error: "Failed to process the file", details: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/chat", handleChat); 

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
  });
