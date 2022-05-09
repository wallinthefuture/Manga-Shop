import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import { fetchAllComics } from '../http/basketAPI';
import BasketItem from './BasketItem';

const BasketList = observer(() => {
  const { user } = useContext(Context);
  const { basket } = useContext(Context);

  const price = [];
  useEffect(() => {
    fetchAllComics(user.userInfo.id).then((data) => {
      basket.setComicses(data);
      basket.setComicsesCount(data.length);
    });
  }, []);

  basket.comicses.forEach((element) => {
    price.push(element.price);
  });

  return (
    <Container className="mt-1 d-flex justify-content-around">
      <Row className="d-flex">
        {basket.comicses.map((comics) => (
          <BasketItem key={comics.id} comics={comics} />
        ))}
      </Row>
      <Card
        className="d-flex flex-column align-items-center justify-content-around mt-5 "
        style={{
          width: 500,
          height: 300,
        }}
      >
        <h3>Totalcost</h3>
        <h4>{price.reduce((sum, current) => sum + current, 0)}</h4>
      </Card>
    </Container>
  );
});

export default BasketList;
