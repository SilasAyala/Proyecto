import React, {useState} from "react";

import './ReciclajeItem.css';
import Card from "../../../shared/components/UIElements/Card/Card.js";
import Button from "../../../shared/components/FormElements/Button.js";
import Modal from "../../../shared/components/UIElements/Modal/Modal.js";
import Map from "../../../shared/components/UIElements/Map/Map.js";

const ReciclajeItem = (props) => {
    const [showMap, setShowMap] = useState(false);
    console.log(props.video)
    const openMapHandler = () => {
        setShowMap(true);
    }

    const closeMapHandler = () => {
        setShowMap(false);
    }

    return(
        <React.Fragment>
            <Modal
                show={showMap}
                header={props.address}
                footer={<Button onClick={closeMapHandler}> CERRAR </Button>}
                footerClass="reciclaje-item__modal-actions"
                contentClass="reciclaje-item__modal-actions"
                onCancel={closeMapHandler}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16}/>
                </div>
            </Modal>

            <li className="reciclaje-item">
                <Card>
                    <div className="reciclaje-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>

                    <div className="recilaje-item__info">
                        <h2> {props.title} </h2>
                        <h3> {props.address} </h3>
                        <p> {props.description} </p>
                    </div>

                    <div className="reciclaje-item__actions">
                        <Button inverse onClick={openMapHandler}>
                            VER UBICACION
                        </Button>
                        <Button href={`${props.video}`} target="_blank" >IR A VIDEO</Button>
                        
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
}

export default ReciclajeItem