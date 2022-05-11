import express from 'express'
const app = express();
import mongoose from 'mongoose';
import routesUrls from './routes/posts.js'
import cors from 'cors'
import bodyParser from "body-parser";

const uglyURL = `mongodb+srv://kaklimas:czEoTzJySz123@cluster0.8wfr9.mongodb.net/posts?retryWrites=true&w=majority`
mongoose.connect(uglyURL, () => console.log('db connected'));


const PORT = 4000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set EJS as templating engine
app.set("view engine", "ejs");
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))
