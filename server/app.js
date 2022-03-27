import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './router/router.js';

const app = express()

app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded()); 

app.use('/api', router)

const IRL = 'mongodb+srv://@cluster'
const PORT = process.env.PORT || 5000

app.get('/test', (req, res) => {
    res.json({test: 'test'})
})

mongoose.connect( IRL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => app.listen( PORT, () => console.log(`Server running on port: ${PORT}`) ) )
    .catch( (err) => console.log( err.message ) );

