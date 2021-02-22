import React, { useState } from 'react'
import {
  Container,
  ListGroup,
} from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import '../styles.css';

function AddressList({ book, onRemove }) {
  const [showDevelopers, setShowDevelopers] = useState(true)

  const ShowDevs = () => (
    <label className='input'>
      Show devs:
      <input
        name="showDevs"
        type="checkbox"
        defaultChecked={showDevelopers}
        onChange={() => setShowDevelopers(!showDevelopers)} />
    </label>
  )

  function Addresses() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <ListGroup>
          <TransitionGroup>
            {book.filter(item => showDevelopers || !item.developer).map(item => (
              <CSSTransition
                key={item.id}
                timeout={500}
                classNames="item">
                <ListGroup.Item className='item' onClick={() => { onRemove(item.id) }}>
                  {item.name} - {item.address}{item.developer && ' - DEV'}
                </ListGroup.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }

  return (
    <div>
      <ShowDevs />
      {Addresses()}
    </div>
  )
}

export default AddressList
