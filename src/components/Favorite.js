import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import DigimonContext from '../context/digimons';
import DigimonShow from './DigimonShow';

export default function Favorite() {
  const { favoriteDigimons, deleteDigimon } = useContext(DigimonContext);

  return (
    <Container>
      <Row>
        {favoriteDigimons.map((item) => {
          return (
            <Col lg={4} md={6} sm={12}>
              <DigimonShow
                digimon={item}
                variant={'danger'}
                btn_name={'Delete'}
                handleClick={deleteDigimon}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
