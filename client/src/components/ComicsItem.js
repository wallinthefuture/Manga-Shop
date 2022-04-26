import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { COMICS_ROUTE } from '../utils/consts';

const ComicsItem = ({ comics }) => {
  const navigate = useNavigate();
  return (
    <Col md={4}>
      <Card
        style={{ width: 300, cursor: 'pointer' }}
        border={'dark'}
        onClick={() => navigate(COMICS_ROUTE + '/' + comics.id)}
      >
        <Image
          width={300}
          height={300}
          src={process.env.REACT_APP_API_URL + comics.img}
        />
        <div className="mt-1 d-flex justify-content-between align-items-center">
          <div>{comics.name}</div>
          <div>
            <div>{comics.rating}</div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ComicsItem;
