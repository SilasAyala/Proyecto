import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../shared/components/UIElements/Avatar/Avatar";
import Card from "../../../shared/components/UIElements/Card/Card.js";

import './MaterialItem.css';

const MaterialItem = (props) => {
    return(
        <li className="material-item">
            <Card className="material-item__content">
                <Link to = {`/${props.id}/reciclaje`}>
                    <div className="material-item__image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>

                    <div className="material-item__info">
                        <h2> {props.name} </h2>
                    </div>
                </Link>
            </Card>
        </li>
    );
}

export default MaterialItem