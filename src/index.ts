import * as express from "express";
import * as cors from "cors";

const application = express();

application.use(cors());

application.get("*", (req, res) => {
  res.json({ name: "dima" });
});

application.listen(process.env.PORT || 8000);
