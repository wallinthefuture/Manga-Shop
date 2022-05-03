import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';
import { action } from 'mobx';

const TypeBar = observer(() => {
  const { comics } = useContext(Context);
  return (
    <ListGroup>
      <ListGroup.Item
        style={{ cursor: 'pointer' }}
        active={comics.selectedType.id === undefined}
        onClick={() => {
          comics.setSelectedType({});
        }}
      >
        All
      </ListGroup.Item>
      {comics.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          key={type.id}
          active={type.id === comics.selectedType.id}
          onClick={() => {
            comics.setSelectedType(type);
          }}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
