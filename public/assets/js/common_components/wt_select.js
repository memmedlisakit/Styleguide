import React from 'react';
import { autobind } from 'core-decorators';

if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

class WTSelectOption extends React.Component {
  @autobind
  render() {
    const { value, label, disabled } = this.props;
    return (
      <option disabled={disabled} value={value} >{label}</option>
    )
  }
}

export default class WTSelect extends React.Component {
  constructor(props) {
    super();
  }

  @autobind
  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const {
      options, label, emptyValue, style, name, className,
      fieldClassName, selected, onChange, disableEmptyValue
    } = this.props;
    const emptyValueOption = (emptyValue === true ? <WTSelectOption key={0} value='' label={label} disabled={disableEmptyValue} /> : null);

    const dropDownOptions = options.map(
      (option, index) => <WTSelectOption key={index} value={option[0]} label={option[1]} />
    );


    return (
      <div className={`wt-select ${className}`} style={style}>
        <select name={name} value={this.props.selected} className={`wt-select__field ${fieldClassName}`} onChange={this.handleChange}>
          {emptyValueOption}
          {dropDownOptions}
        </select>
      </div>
    );
  }
}


WTSelect.defaultProps = {
  name: '',
  label: '',
  style: {},
  emptyValue: true,
  selected: null,
  options: [],
  className: '',
  fieldClassName: '',
  disableEmptyValue: false,
  onChange: (value, text) => { }
};
