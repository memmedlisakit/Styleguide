import React from 'react';
import { makeid } from './utils';

export default ({ label, id, ...attributes }) => {
  let lbl = null;
  let myId = id || makeid(10);

  if (label) {
    lbl = <label htmlFor={myId}>{label}</label>;
  }

  return (
    <div className="wt-form-group">
      <label className="wt-form-group__label">
          <input 
            {...attributes}
            type="checkbox"
            className={`wt-checkbox ${attributes.className ? attributes.className : ""}`}
            id={myId}
          />
      {lbl}
      </label>
    </div>
  )
};
