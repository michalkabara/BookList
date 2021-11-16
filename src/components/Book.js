import {useState, useEffect} from 'react'
import {useGlobalContext} from '../context'

const Book = () => {
  const {book} = useGlobalContext()

  const {id, title, author, publishingHouse, pages} = book

  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{publishingHouse}</p>
      <p>Pages: {pages}</p>
    </div>
  )
}

export default Book
