import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

import Loader from '../components/Loader'

import Message from '../components/Message'
import { listComicDetails } from '../actions/comicActions'

const ComicScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const comicDetails = useSelector((state) => state.comicDetails)
  const { loading, error, comic } = comicDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(listComicDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={comic.image} alt={comic.title} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{comic.title}</h3>
                </ListGroup.Item>

                <ListGroup.Item>Price: ${comic.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {comic.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{comic.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {comic.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {comic.countInStock > 0 && (
                    <ListGroup.Item>
                      <Col>
                        <Row>Qty</Row>
                        <Row>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}>
                            {[...Array(comic.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Row>
                      </Col>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={comic.countInStock === 0}>
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default ComicScreen
