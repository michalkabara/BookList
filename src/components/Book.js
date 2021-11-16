const Book = book => {
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
