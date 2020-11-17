import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://gkdlswm5:Duswns5193!@cluster0.4hswk.mongodb.net/SocialMedia?retryWrites=true&w=majority";

const PORT = process.env.PORT || 7777;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
