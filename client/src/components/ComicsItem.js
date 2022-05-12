import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { addComicsToBasket } from '../http/basketAPI';
import { deleteComicsInShop, fetchComics } from '../http/comicsApi';
import { COMICS_ROUTE } from '../utils/consts';

const ComicsItem = observer(({ com }) => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const { comics } = useContext(Context);

  const addComics = () => {
    addComicsToBasket(com.id, user.userInfo.id).then((data) => {});
  };

  function deleteShopComics() {
    deleteComicsInShop(com.id).then((data) => {
      comics.setComicsesCount(comics.comicsesCount - 1);
      console.log(comics.comicsesCount);
    });
  }
  // useEffect(() => {
  //   fetchComics(null, 1, 6).then((data) => {
  //     comics.setComicses(data.rows);
  //     comics.setTotalCount(data.count);
  //   });
  // }, [comics.comicsesCount]);
  return (
    <Col md={4}>
      <Card
        style={{ width: 300, cursor: 'pointer' }}
        border={'dark'}
        onClick={() => navigate(COMICS_ROUTE + '/' + com.id)}
        className="mt-2 mb-2"
      >
        <Image
          width={300}
          height={300}
          src={process.env.REACT_APP_API_URL + com.img}
        />
        <div className="mt-1 d-flex justify-content-around align-items-center">
          <div>{com.name}</div>
          <div>
            <ion-icon name="cash-outline"></ion-icon>
            {com.price}
          </div>
          <div>
            <div>
              <ion-icon name="star-outline"></ion-icon>
              {com.rating}
            </div>
          </div>
        </div>
      </Card>

      <div>
        <Button variant="outline-success" onClick={addComics} className="me-3">
          Buy
        </Button>
        {user.role ? (
          <Button variant="outline-danger" onClick={deleteShopComics}>
            Delete
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </Col>
  );
});

export default ComicsItem;
