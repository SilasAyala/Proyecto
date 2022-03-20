import React from "react";

import MaterialList from "../components/MaterialList/MaterialList.js";

const Materials = () => {
    const MATERIALS = [
        {
            id: 'm1',
            name: 'Plástico',
            image: 'https://www.plastico.com/documenta/imagenes/114660/El-reciclaje-de-plasticos-la-solucion-mas-amigable-con-el-medio-ambiente-GR.jpg'           
        },
        {
            id: 'm2',
            name: 'Cartón',
            image: 'https://farm1.staticflickr.com/431/19884411868_497012929f.jpg'
        }
    ]

    return(
        <MaterialList items = {MATERIALS} />
    );
}

export default Materials;