import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image } from 'react-bootstrap';
import { Context } from '..';
import { deleteComicsInBasket, fetchAllComics } from '../http/basketAPI';

const BasketItem = observer(({ comics, count }) => {
  const { user } = useContext(Context);
  const { basket } = useContext(Context);

  function deleteComics() {
    deleteComicsInBasket(comics.id).then((data) => {
      basket.setComicsesCount(basket.comicsesCount - 1);
    });
  }
  useEffect(() => {
    fetchAllComics(user.userInfo.id).then((data) => {
      basket.setComicses(data);
    });
  }, [basket.comicsesCount]);

  return (
    <Col md={5}>
      <Card style={{ width: 300 }} border={'dark'} className="mt-2 mb-2 ml-5">
        <Card.Img
          width={300}
          height={200}
          src={process.env.REACT_APP_API_URL + comics.img}
        />

        <Card.Body>
          <Card.Title>{comics.name}</Card.Title>
          <Card.Text>
            <ion-icon name="cash-outline"></ion-icon>
            {comics.price}
            <ion-icon name="star-outline"></ion-icon>
            {comics.rating}
          </Card.Text>
        </Card.Body>
        <Button variant="outline-danger" onClick={deleteComics}>
          Delete
        </Button>
      </Card>
    </Col>
  );
});

export default BasketItem;
