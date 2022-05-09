import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import ComicsList from '../components/ComicsList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchComics, fetchType } from '../http/comicsApi';

const Shop = observer(() => {
  const { comics } = useContext(Context);

  useEffect(() => {
    fetchType().then((data) => {
      comics.setTypes(data);
    });
    fetchComics(null, 1, 6).then((data) => {
      comics.setComicses(data.rows);
      comics.setTotalCount(data.count);
      comics.setComicsesCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchComics(comics.selectedType.id, comics.page, 6).then((data) => {
      comics.setComicses(data.rows);
      comics.setTotalCount(data.count);
    });
  }, [comics.page, comics.selectedType]);

  return (
    <Container>
      <Row className="mt-2 ml-0">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ComicsList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
