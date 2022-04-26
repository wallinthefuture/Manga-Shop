import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { createGenre } from '../../http/comicsApi';
const CreateGenres = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addGenre = () => {
    createGenre(value).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить жанр
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={'Введите название типа комикса'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addGenre}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateGenres;
