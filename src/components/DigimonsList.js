import React, { useContext } from 'react';
import DigimonContext from '../context/digimons';
import { Container, Row, Col } from 'react-bootstrap/';
import DigimonShow from './DigimonShow';
import axios from 'axios';

export default function DigimonsList() {
  const { digimons } = useContext(DigimonContext);

  const handleClick = async (digimon) => {
    await axios.post('http://localhost:8080/digimon/', digimon);
  };
  return (
    <Container>
      <Row className='g-4'>
        {digimons.map((item) => {
          return (
            <Col lg={4} md={6} sm={12}>
              <DigimonShow
                digimon={item}
                handleClick={handleClick}
                variant='primary'
                btn_name={'Add To Favorite'}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
