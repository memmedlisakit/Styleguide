import React from 'react';
import { makeid } from './utils';

export default class Input extends React.Component {
  render() {
    const { validationMessage, label, id, bsStyle, className, formClass, ...attributes} = this.props;
    const uniqueId = id || makeid();
    
    // const sizeClass = () => {this.props.size || 'md'; return `form-group__input--${size}`};

    const helpBlock = validationMessage ?
          <span className="wt-form-group__message--error">{this.props.validationMessage}</span> :
          null;

    const labelBlock = label ?
          <label htmlFor={uniqueId} className="wt-form-group__label">{label}</label> :
          null; 
    return (
      <div className={`wt-form-group ${formClass}`}>
        {labelBlock}
 
        <input type="text" {...attributes} id={uniqueId}
          className={`wt-form-group__input wt-form-group__input--${bsStyle} ${className}`}
        />
        {helpBlock}
      </div>
    );
  }
}


Input.defaultProps = {
  validationMessage: '',
  label: null,
  formClass: '',
  // valid: true,
  // size: 'md', 
  bsStyle: '', // error, warning
  className: null
}
