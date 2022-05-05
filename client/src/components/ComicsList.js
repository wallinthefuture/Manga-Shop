import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import ComicsItem from './ComicsItem';

const ComicsList = observer(() => {
  const { comics } = useContext(Context);

  return (
    <Row className="d-flex">
      {comics.comicses.map((comics) => (
        <ComicsItem key={comics.id} comics={comics} />
      ))}
    </Row>
  );
});

export default ComicsList;
