const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const employeeRoutes = require('./routes/Employee')

const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000
const DdbURI= 'mongodb://localhost:27017/Employee'


app.use(bodyParser.json());
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

app.use("/api",employeeRoutes);

mongoose.connect(DdbURI,
    {useNewUrlParser:true,  useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(port, () => console.log('server running on port '+port))