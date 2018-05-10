import React from 'react';
import { makeid } from './utils';

export default class WInput extends React.Component {
  render() {
   const {
      validationMessage,
      label,
      id,
      size = 'md',
      bsStyle,
      className,
      maxLength,
      value,
      floatErrorMessage,
      onClick,
      onBlur,
      onFocus,
      valid,
      inline,
      ...attributes
    } = this.props; 
    
    const uniqueId = id || makeid();
    const sizeClass = () => {size || 'md'; return `form-group__input--${size}`};

    const floatErrorMessageBlock = floatErrorMessage ?
          <span className="wt-form-group__message--error" dangerouslySetInnerHTML={{__html:validationMessage}}></span> :
          <span className="form-group__message--error" dangerouslySetInnerHTML={{__html:validationMessage}}></span>;

    const helpBlock = validationMessage ?
          floatErrorMessageBlock :
          null;

    const labelBlock = label ?
          <label htmlFor={uniqueId} className="form-group__label">{label}</label> :
          null

    const clsName = className || `form-group__input ${sizeClass()} ${maxLength ? 'form-group__input--with-max-length' : ''} form-group__input--${bsStyle} ${className}`
    return (
      <div className={`form-group__input-container${!!inline ? '--inline' : ''}`}>
        {labelBlock}

        <input type="text" id={uniqueId} onClick={onClick}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value == undefined || value === null ? '' : value}
          maxLength={maxLength}
          {...attributes}
          className={clsName}/>
        {helpBlock}
        {maxLength !== null &&(
          <div className="form-group__max-length-label">
            {maxLength - (value || '').length}
          </div>
        )}
      </div>
    );
  }
}


WInput.defaultProps = {
  id: null,
  validationMessage: null,
  maxLength: null,
  label: null,
  valid: true,
  size: 'md', //
  bsStyle: null, // error, warning
  className: null,
  floatErrorMessage: null //validation message make space at bottom or not.
}
