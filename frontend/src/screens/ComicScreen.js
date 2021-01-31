import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'

const ComicScreen = ({ match }) => {
  const [comic, setComic] = useState({})

  useEffect(() => {
    const fetchComic = async () => {
      const { data } = await axios.get(`/api/comics/${match.params.id}`)
      console.log(data)
      setComic(data)
    }
    fetchComic()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={comic.image} alt={comic.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{comic.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{comic.issue}</ListGroup.Item>
            <ListGroup.Item>{comic.year}</ListGroup.Item>
            <ListGroup.Item>{comic.age}</ListGroup.Item>
            <ListGroup.Item>{comic.author}</ListGroup.Item>
            <ListGroup.Item>{comic.artist}</ListGroup.Item>
            <ListGroup.Item>{comic.character}</ListGroup.Item>
            <ListGroup.Item>{comic.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ComicScreen
