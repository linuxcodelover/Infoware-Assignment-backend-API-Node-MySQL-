const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require("./routes/userRouter");

app.use("/api/v1/user/", userRouter);

app.listen(4000, () => {
  console.log(`Server started on port localhost:${4000}`);
});
