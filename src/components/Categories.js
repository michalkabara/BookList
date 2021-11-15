import React from 'react'

const Categories = ({
  cleanSelectedCategories,
  categories,
  setSelectedCategoriesHandler,
}) => {
  return (
    <div className='categories-container'>
      <button onClick={() => cleanSelectedCategories()}>Reset</button>
      {categories.map(item => (
        <div className='checkbox-container'>
          <span>{item}</span>
          <input
            type='checkbox'
            onClick={event =>
              setSelectedCategoriesHandler(item, event)
            }></input>
        </div>
      ))}
    </div>
  )
}

export default Categories
