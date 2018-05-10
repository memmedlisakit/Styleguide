import React from 'react';

export default ({
  children,
  size = 'md',
  onClick,
  href,
  inProgress = false,
  className = '',
  style,
  type = 'green',
  disabled = false }) => {
  const buttonSize = `wt-button--${size}`;
  const progressType = inProgress ? 'wt-buttonspinner' : '';
  const buttonType = `wt-button--${type}`;

  const attributes = {
    className: `wt-button  ${buttonType} ${buttonSize} ${progressType} ${className}`,
    disabled,
    onClick,
    style
  };


  return (
    <a {...attributes} href={href}> {children} </a>
  );
};
