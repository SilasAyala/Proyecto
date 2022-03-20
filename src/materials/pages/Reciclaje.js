import React from "react";
import { useParams } from "react-router-dom";
import ReciclajeList from "../../Reciclaje/components/ReciclajeList/ReciclajeList";

const RECICLAJES = [
    {
        id: 'r1',
        title: 'Botella de Plastico',
        description: 'El plástico tarda más o menos en descomponerse entre 100 y 1000 años. Una Botella tarda aproximadamente 500 años.',
        imageURL: 'https://www.latercera.com/resizer/PTwuVDHim6_TwypQxK-bB56TQ34=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/MXNW22YTDZD3JGTMLIQESDMFM4.jpg',
        address: 'Recicladora La Joya',
        videoURL: 'https://www.youtube.com/watch?v=xI4BwOpKLPs',
        location: {
            lat: 14.521969499301948, 
            lng: -90.53807718551371
        },
        materialId: 'm1'     
    },
    {
        id: 'r2',
        title: 'Cartón',
        description: 'Tiempo de degradación del papel y del cartón: 1 año. Al ser básicamente celulosa, su tiempo de descomposición es escaso. Además, si el ambiente es lluvioso y se encuentra en la superficie, su biodegradación se acelera. El problema puede residir en las tintas que se emplean.',
        imageURL: 'https://www.guatemala.com/fotos/201701/CODIGUA3-885x500.jpg',
        address: 'CODIGUA',
        videoURL: 'https://www.youtube.com/watch?v=cyBGiOblUIE',
        location: {
            lat: 14.574695, 
            lng: -90.545454
        },
        materialId: 'm2'     
    }
];

const Reciclaje = () => {
    const materialId = useParams().materialId;
    const loadedMaterials = RECICLAJES.filter(material => material.materialId === materialId);

    return(
        <ReciclajeList items={loadedMaterials} />
    );
}

export default Reciclaje