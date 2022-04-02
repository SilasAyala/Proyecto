import HttpError from '../models/http-error.js';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        name: 'tetra pak',
        imagen: 'imagen.jpg',
    }
];

export const getProducts = (req, res, next) => {
    res.status(200).send({products: DUMMY_PRODUCTS});
}