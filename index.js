
import express from 'express';
import mongoose from 'mongoose';
import crypto from 'crypto'
import authRoutes from './routes/authRoutes.js';
import { secretKey } from './config.js';
import cors from 'cors'
const app = express();

// Connect to MongoDB Atlas
const result = mongoose.connect(process.env.PUBLIC_MONGO_ID, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(error => console.error(error));

app.use(express.json());
// app.use(cors({ origin: '*' }));
// Routes
app.use('/api', authRoutes);
 console.log("server reached")

 app.get('/', (req, res) => {
  mongoose.connect(process.env.PUBLIC_MONGO_ID, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error(error));
  res.send('API is running!');
  res.send(process.env.PUBLIC_MONGO_ID)
  res.send(result)
  console.log("from  app",process.env.PUBLIC_MONGO_ID)
  console.log("from app",result)
});

// const generateSecretKey = () => {
//   return crypto.randomBytes(32).toString('hex');
// };

// console.log(generateSecretKey());
// Start the server

const port = process.env.PORT || '8000'
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)

})

