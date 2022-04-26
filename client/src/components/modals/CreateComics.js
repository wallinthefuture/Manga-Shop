import { observer } from 'mobx-react-lite';

import React, { useContext, useEffect, useState } from 'react';
import { Modal, Form, Button, Dropdown } from 'react-bootstrap';
import { createComics, fetchGenre, fetchType } from '../../http/comicsApi';
import { Context } from '../../index';

const CreateComics = observer(({ show, onHide }) => {
  const { comics } = useContext(Context);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchType().then((data) => {
      comics.setTypes(data);
    });
    fetchGenre().then((data) => {
      comics.setGenres(data);
    });
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addComics = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('description', description);
    formData.append('typeId', comics.selectedType.id);
    formData.append('genreId', comics.selectedGenre.id);

    createComics(formData).then((data) => {
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить комикс
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {comics.selectedType.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {comics.types.map((type) => (
                <Dropdown.Item
                  onClick={() => comics.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {comics.selectedGenre.name || 'Выберите жанр'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {comics.genres.map((genre) => (
                <Dropdown.Item
                  onClick={() => comics.setSelectedGenre(genre)}
                  key={genre.id}
                >
                  {genre.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            id="create-comics-form"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название комикса"
          />
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-3"
            placeholder="Введите описание комикса"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите цену комикса"
            type="number"
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите изображение комикса"
            id="file"
            type="file"
            onChange={selectFile}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addComics}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateComics;
