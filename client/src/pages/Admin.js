import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateComics from '../components/modals/CreateComics';
import CreateGenres from '../components/modals/CreateGenres';
import CreateType from '../components/modals/CreateType';
import { createPDFFile } from '../http/pdfAPI';

const Admin = () => {
  const [genreVisible, setGenreVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [comicsVisible, setComicsVisible] = useState(false);

  const createPDF = () => {
    createPDFFile().then((data) => {
      console.log(data);
    });
  };

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип комикса
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setGenreVisible(true)}
      >
        Добавить жанр
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setComicsVisible(true)}
      >
        Добавить комикс
      </Button>
      <Button variant="outline-dark" className="mt-4 p-2" onClick={createPDF}>
        Выгрузить все комиксы в PDF файл
      </Button>
      <CreateGenres show={genreVisible} onHide={() => setGenreVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateComics
        show={comicsVisible}
        onHide={() => setComicsVisible(false)}
      />
    </Container>
  );
};

export default Admin;
