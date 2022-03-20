import React from "react";

import './ReciclajeList.css';

import Card from "../../../shared/components/UIElements/Card/Card.js";
import ReciclajeItem from "../ReciclajeItem/ReciclajeItem.js";

const ReciclajeList = (props) => {
    if(props.items.length ===0) {
        return(
            <div className="reciclaje-list center">
                <Card>
                    <h2> No se encontraron formas de reciclar </h2>
                </Card>
            </div>
        );
    } else {
        return(
            <ul className="reciclaje-list">
                {props.items.map(reciclaje => (
                    <ReciclajeItem 
                        key={reciclaje.id}
                        id={reciclaje.id}
                        image={reciclaje.imageURL}
                        title={reciclaje.title}
                        video={reciclaje.videoURL}
                        description={reciclaje.description}
                        address={reciclaje.address}
                        materialId={reciclaje.materialId}
                        coordinates={reciclaje.location}
                    />
                ))}
            </ul>
        );
    }
}

export default ReciclajeList;