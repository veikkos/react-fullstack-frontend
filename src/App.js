import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputForm from './components/InputForm.js'
import AddressList from './components/AddressList.js'
import './styles.css'

const backendUri = 'http://localhost:3001/address'

const App = () => {
  const [book, setBook] = useState([])

  // Fetch list of addresses from backend and push them to "book"
  const onRefresh = () => {
    axios
      .get(backendUri)
      .then(response => {
        setBook(response.data)
      })
  }

  // Initial refresh of address book on backend
  useEffect(() => onRefresh(), [])

  // User submitted new addres to the book
  const onSubmit = ({ name, address, developer }) => {
    axios
      .post(backendUri, { name, address, developer })
      .then(() => onRefresh())
  }

  // User removed an address from the book - remove it from backend
  const onRemove = (id) => {
    axios
      .delete(backendUri, { params: { id } })
      .then(() => onRefresh())
  }

  return (
    <div>
      <InputForm onSubmit={onSubmit} />
      <AddressList book={book} onRemove={onRemove} />
    </div>
  )
}

export default App
