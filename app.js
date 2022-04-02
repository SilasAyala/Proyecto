import express from "express";
import bodyParser from "body-parser";

import productsRoutes from './routes/products-routes.js'
import recycleRoutes from './routes/recycle-routes.js'

const port = 5000;
const app = express();

app.use(bodyParser.json());

//middleware gestion de products
app.use('/api/products', productsRoutes);

//middleware gestion rutas recycle.
app.use('/api/recycle/', recycleRoutes);

//middleware error handling
app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    } else {
        res.status( error.code|| 500);
        res.json({mensaje: error.message || 'Ocurrio un error desconocido'})
    }
})



app.listen(port);