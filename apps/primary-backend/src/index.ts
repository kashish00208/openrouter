import express from 'express';
import authRouter from './modules/auth/auth.controller';
import cors from 'cors';

const app = express();

app.use(express.json());


const corsOptions = {
  credentials: true,
  origin: true 
};

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});


app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 



app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use('/auth', authRouter);

app.post("/check", (req, res) => {
  console.log("POST HIT", req.body);
  res.json("working really fine here");
});



app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
