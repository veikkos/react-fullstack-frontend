import React, { useState } from 'react'

const InputForm = ({ submit }) => {
  const [name, setName] = useState('Veikko')
  const [address, setAddress] = useState('Mannerheimintie')
  const [developer, setDeveloper] = useState(false)

  const submitInternal = (event) => {
    event.preventDefault()
    if (name.length && address.length) {
      submit({ name, address, developer })
      setName('')
      setAddress('')
    }
  }

  return (
    <form className='form' onSubmit={submitInternal}>
      <label className='input'>
        Name:
        <input type="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)} />
      </label>
      <label className='input'>
        Address:
        <input type="text"
          name="address"
          value={address}
          onChange={({ target }) => setAddress(target.value)} />
      </label>
      <label className='input'>
        Developer:
        <input
          name="developer"
          type="checkbox"
          defaultChecked={developer}
          onChange={() => setDeveloper(!developer)} />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default InputForm
