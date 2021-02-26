import React, { useState } from 'react'
import strings from '../localization/localization.js'

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
        {strings.name}:
        <input type="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)} />
      </label>
      <label className='input'>
        {strings.address}:
        <input type="text"
          name="address"
          value={address}
          onChange={({ target }) => setAddress(target.value)} />
      </label>
      <label className='input'>
        {strings.developer}:
        <input
          name="developer"
          type="checkbox"
          defaultChecked={developer}
          onChange={() => setDeveloper(!developer)} />
      </label>
      <button type="submit">{strings.add}</button>
    </form>
  )
}

export default InputForm
