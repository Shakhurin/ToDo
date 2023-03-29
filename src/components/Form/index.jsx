import { useState } from "react"


export const Form = ({ addToList }) => {

  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!value) return
    
    addToList(value)
    return setValue('')
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className='d-flex flex-column align-items-center mt-3'>
      <div className="mb-3">
        <input
          placeholder="Задача"
          value={value}
          name='oneTodo'
          onChange={(event) => setValue(event.target.value)} 
          type="text"
          className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mb-3">Добавить</button>
    </form>
  )
}