import React from 'react'

const Book = ({id, title, author, publishingHouse, pages}) => {
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
