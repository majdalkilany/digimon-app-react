import Button from 'react-bootstrap/Button';
import { Card, Col } from 'react-bootstrap/';

function DigimonShow({ digimon, handleClick, variant, btn_name }) {
  const onClick = () => {
    handleClick(digimon);
  };
  return (
    <Col lg={4} md={6} sm={12}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={digimon.img} />
        <Card.Body>
          <Card.Title>{digimon.name}</Card.Title>

          <Card.Text>{digimon.level}</Card.Text>
          <Button variant={variant} onClick={onClick}>
            {btn_name}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DigimonShow;
