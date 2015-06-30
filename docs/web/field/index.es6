import React, { Component, PropTypes } from 'react';

export default class Field extends Component {
  render() {
    const { disabled, label, value } = this.props;
    const fieldStyle = {
      ...style.field,
      ...this.props.style
    }
    const id = `${label}-${new Date().getTime()}`;

    const inputStyle = style.value;
    if (disabled) {
      inputStyle.cursor = 'default';
      inputStyle.borderBottomColor = 'transparent';
    } else {
      inputStyle.borderBottomColor = 'rgba(0,189,112,0.3)';
    }

    return (
      <fieldset style={fieldStyle} disabled={disabled}>
        <label htmlFor={id} style={style.label}>{label}</label>
        <input id={id} name={label} defaultValue={value} style={inputStyle} />
      </fieldset>
    );
  }

  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    value: PropTypes.string.isRequired
  }
}

const style = {
  field: {
    border: 0,
    margin: 0,
    padding: 0
  },
  label: {
    color: '#00bd70',
    display: 'block',
    fontSize: 13,
    textTransform: 'uppercase'
  },
  value: {
    border: 'none',
    borderBottom: '1px solid transparent',
    color: '#7b7b7b',
    display: 'block',
    fontSize: 18,
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 10,
    outline: 0,
    width: '100%'
  }
}