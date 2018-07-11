import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/header'
import Form from './components/form'
import List from './components/list'

/**
 * App
 *
 * main component of the application
 *
 * @param {object} props - provides state and setState props
 */
const App = ({ state, setState }) => {
  const handleResults = items => {
    setState({
      items
    })
  }

  return (
    <main>
      <Header />
      <Form onResults={handleResults} />
      <List items={state.items} />
    </main>
  )
}

App.propTypes = {
  /**
   * current state of app
   */
  state: PropTypes.shape({
    criteria: PropTypes.string
  }).isRequired,
  /**
   * function to change state and re-render app
   */
  setState: PropTypes.func.isRequired
}

export default App
