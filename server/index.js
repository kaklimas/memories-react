import express from 'express'
const app = express();
import mongoose from 'mongoose';
import routesUrls from './routes/posts.js'
import cors from 'cors'

const uglyURL = `mongodb+srv://kaklimas:czEoTzJySz123@cluster0.8wfr9.mongodb.net/posts?retryWrites=true&w=majority`
mongoose.connect(uglyURL, () => console.log('db connected'));

const PORT = 4000

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))
