import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner, Row, Col } from 'react-bootstrap'
import Comic from '../components/Comic'

const HomeScreen = () => {
  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/comics`)
      .then((response) => {
        setComics(response.data.comics)
        console.log(response.data.comics)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    )
  }

  return (
    <>
      <Row>
        {comics.map((comic) => (
          <Col key={comic._id} sm={12} md={6} lg={4} xl={3}>
            <Comic comic={comic} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
