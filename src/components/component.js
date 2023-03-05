import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="component-textinput input"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  textinput_placeholder: 'Your phone number...',
}

AppComponent.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default AppComponent
