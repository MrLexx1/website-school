import { Card, Button } from "react-bootstrap";

const Cardjurusan = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>{props.deskripsi}</Card.Text>
        <Button variant="primary">{props.tombol}</Button>
      </Card.Body>
    </Card>
  );
};

export default Cardjurusan;
