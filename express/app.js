const path = require('path');

const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// For Receive Form data used body parser package
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
// Add a statically access public folder
app.use(express.static(path.join(__dirname,'public')));
// Add Route Prefix
app.use('/admin',adminRoutes);
app.use(shopRoutes);
// Add a 404 page system
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(3000);