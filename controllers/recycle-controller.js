import HttpError from "../models/http-error.js";


let DUMMY_RECYCLES = [
    {
        id: 'r1',
        title: 'Tetra Pak de Leche',
        recicladora: 'Punto Verde Parque Naciones Unidas',
        location: {
            lat: 14.4994,
            lng:-90.6075
        },
        tutorial: 'https://www.youtube.com/watch?v=VgL7pKn5AeA',
        productId: 'p1'
    }
];

export const getRecycleByProductId = (req, res, next) => {   
    const prodId = req.params.pid;
    const recycle2Retrive = DUMMY_RECYCLES.filter( p => {return p.productId === prodId});

    if(!recycle2Retrive || recycle2Retrive.length === 0) {
        console.log('error')
        const error = new HttpError('No se encontraron reciclajes para este producto', 404);
        return next(error);
    } else {
        res.json(recycle2Retrive);
    }
}