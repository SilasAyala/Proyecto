import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';
import './PlaceList.css';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No se encontraron Places, ¿Quieres crear uno?</h2>
          <Button to="/places/new">Compartir Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageURL}
          title={place.title}
          video={place.videoURL}
          description={place.description}
          address={place.address}
          materialId={place.materialId}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
