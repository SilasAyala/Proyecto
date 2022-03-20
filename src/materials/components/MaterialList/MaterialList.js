import React from "react";

import './MaterialList.css';
import MaterialItem from "../MaterialItem/MaterialItem.js";
import Card from "../../../shared/components/UIElements/Card/Card.js";

const MaterialList = (props) => {
    if(props.items.length === 0) {
        return(
            <Card className = "center">
                <h2> No se encontraron materiales de Reciclaje. </h2>
            </Card>
        );
    } else {
        return (
            <ul className="material-list">
                {props.items.map(material => {
                    return(
                        <MaterialItem
                            key={material.id}
                            id={material.id}
                            name={material.name}
                            image={material.image}
                        />
                    );
                })}
            </ul>
        )
    }
}

export default MaterialList