
const express = require('express');
const app = express()
const port = 3000;
const surveyRoutes = require('./routes/surveyRoutes');
app.use(express.json());


app.use('/api/survey', surveyRoutes)
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})