import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import ComicsItem from './ComicsItem';

const ComicsList = observer(() => {
  const { comics } = useContext(Context);

  return (
    <div>
      {console.log(comics.selectedType.id)}
      {comics.selectedType.id === undefined ? (
        <Row className="d-flex">
          {comics.comicses.map((com) => (
            <ComicsItem key={com.id} comics={com} />
          ))}
        </Row>
      ) : (
        <Row className="d-flex">
          {comics.comicses
            .filter((com) => com.typeId === comics.selectedType.id)
            .map((filteredComics) => (
              <ComicsItem key={filteredComics.id} comics={filteredComics} />
            ))}
        </Row>
      )}
    </div>
  );
});

export default ComicsList;
