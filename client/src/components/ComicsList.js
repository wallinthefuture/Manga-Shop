import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import ComicsItem from './ComicsItem';
import { fetchComics } from '../http/comicsApi';

const ComicsList = observer(() => {
  const { comics } = useContext(Context);

  return (
    <Row className="d-flex">
      {comics.comicses.map((comics) => (
        <ComicsItem key={comics.id} com={comics} />
      ))}
    </Row>
  );
});

export default ComicsList;
