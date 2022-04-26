import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneComics } from '../http/comicsApi';

const ComicsPages = () => {
  const [comics, setComicses] = useState({ genre: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneComics(id).then((data) => setComicses(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + comics.img}
          />
        </Col>
        <Col md={4}>
          <Row>
            <h2>{comics.name}</h2>
            <div style={{ fontSize: 24 }}>{comics.rating}</div>
            <h3>{comics.description}</h3>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
            }}
          >
            <h3>От: {comics.price} BYN.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ComicsPages;
