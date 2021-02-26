import React, { useState } from 'react'
import strings from '../localization/localization.js'
import {
  Container,
  ListGroup,
} from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import '../styles.css';

const AddressList = ({ book, onRemove }) => {
  const [showDevelopers, setShowDevelopers] = useState(true)

  const ShowDevs = () => (
    <label className='input'>
      {strings.showDevelopers}:
      <input
        name="showDevs"
        type="checkbox"
        defaultChecked={showDevelopers}
        onChange={() => setShowDevelopers(!showDevelopers)} />
    </label>
  )

  const PopulateList = () =>
    book.filter(item => showDevelopers || !item.developer).map(item => (
      <CSSTransition
        key={item.id}
        timeout={500}
        classNames="item">
        <ListGroup.Item className='item' onClick={() => { onRemove(item.id) }}>
          {item.name} - {item.address}{item.developer && ` (${strings.developer})`}
        </ListGroup.Item>
      </CSSTransition>
    ))

  const Addresses = () => {
    return (
      <Container style={{ marginTop: '20px' }}>
        <ListGroup>
          <TransitionGroup>
            {PopulateList()}
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
