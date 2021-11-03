import React from 'react'

const Categories = ({filterBooks, categories}) => {
  return (
    <div className='categories-container'>
      <button onClick={() => filterBooks('all')}>Reset</button>
      {categories.map(item => (
        <div className='checkbox-container'>
          <span>{item}</span>
          <input type='checkbox' onClick={() => filterBooks(item)}></input>
        </div>
      ))}
    </div>
  )
}

export default Categories
