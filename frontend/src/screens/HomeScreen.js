import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Spinner, Row, Col } from 'react-bootstrap'
import Paginate from '../components/Paginate'
import Comic from '../components/Comic'
import { listComics } from '../actions/comicActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const comicList = useSelector((state) => state.comicList)
  const { loading, error, comics, page, pages } = comicList

  useEffect(() => {
    dispatch(listComics(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Row>
        {comics.map((comic) => (
          <Col key={comic._id} sm={12} md={6} lg={4} xl={3}>
            <Comic comic={comic} />
          </Col>
        ))}
      </Row>
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
    </>
  )
}

export default HomeScreen
