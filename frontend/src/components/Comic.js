import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Comic = ({ comic }) => {
  return (
    <Card className='my-3 p-3 rounded list-unstyled text-center'>
      <Link to={`/comics/${comic._id}`}>
        <Card.Img src={comic.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/comics/${comic._id}`}>
          <Card.Title as='div'>
            <strong>{comic.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Card.Text as='li'>$ {comic.price}</Card.Text>
          <Card.Text as='li'>{comic.publisher}</Card.Text>
          <Card.Text as='li'>{comic.year}</Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Comic
