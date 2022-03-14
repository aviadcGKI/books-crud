import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const AuthorsList = ({ authorName, authorAge, authorCountry, imageUrl, authorId }) => {

  const history = useHistory();

  const goToProfile = () => {
    const authorData = {
      authorName,
      authorAge,
      authorCountry,
      imageUrl,
      authorId
    }
    history.push(`/author/${authorId}`, authorData);
  }
  return (
    <Card style={{ width: '15rem', height: '22rem' }}>
      <Card.Img variant="top" src={imageUrl} height="250" />
      <Card.Body>
        <Card.Title>{authorName}</Card.Title>
        <Button variant="primary" onClick={goToProfile}>Go to profile</Button>
      </Card.Body>
    </Card>
  )
}

export default AuthorsList