import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputForm from './components/InputForm.js'
import AddressList from './components/AddressList.js'
import './styles.css';

const backendUri = 'http://localhost:3001/address'

const App = () => {
  const [book, setBook] = useState([])

  const refresh = () => {
    axios
      .get(backendUri)
      .then(response => {
        setBook(response.data)
      })
  }

  useEffect(() => {
    refresh()
  }, [])

  const submit = ({ name, address, developer }) => {
    axios
      .post(backendUri, { name, address, developer })
      .then(() => {
        refresh()
      })
  }

  const onRemove = (id) => {
    axios
      .delete(backendUri, { params: { id } })
      .then(() => {
        refresh()
      })
  }

  return (
    <div>
      <InputForm submit={submit} />
      <AddressList book={book} onRemove={onRemove} />
    </div>
  )
}

export default App
