import React from 'react';
import { makeid } from './utils';

export default class Textarea extends React.Component {
  render() {
    const { validationMessage, label, id, bsStyle, className,formClass} = this.props;
    const uniqueId = id || makeid(7);

    const helpBlock = validationMessage ?
          <span className="wt-form-group__message--error">{this.props.validationMessage}</span> :
          null;

    const labelBlock = label ?
          <label htmlFor={uniqueId} className="wt-form-group__label">{label}</label> :
          null;
  
    return (
      <div className={`wt-form-group ${formClass}`}>
        {labelBlock}
        <textarea id={uniqueId} type="text"  /*{...this.props}*/ className={`wt-form-group__textarea wt-form-group__textarea--${bsStyle} ${className}`}  />
        {helpBlock}
      </div>
    );
  }
}

Textarea.defaultProps = {
  validationMessage: null,
  label: null,
  // valid: true,
  // size: 'md', 
  bsStyle: null, // error, warning
  className:null,
  formClass:null
}

