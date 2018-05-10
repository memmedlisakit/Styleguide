import React from 'react';
import assign from 'object-assign';
let _size = null;
export default class Modal extends React.Component {

  
  componentDidMount(){
    this.modal.focus();
  }

  render() {
    const { 
      children, 
      onClose, 
      title, 
      closeOnBackdrop = true, 
      customClass = null, 
      style = null, 
      type, 
      size = null, 
      hidden,
      hideCloseButton = false,
      mixClass,
      capitonStyle
    } = this.props;
    const backDrop = <div className="wt-modal__backdrop" onClick={closeOnBackdrop ? onClose : null}></div> ;
    const closeStyle = assign({},this.props.closeStyle);
    _size = size; 

    return (
      <div ref={i => this.modal = i} tabIndex="1" className={`${ hidden ? 'wt-modal--closed' : 'wt-modal'} ${customClass ? customClass : ''}`}>
        {customClass ? backDrop : null}
        <div className={`wt-modal__${type} ${size ? 'wt-modal__'+type+"--"+size : ''} ${mixClass}`} style={style}>
          <Modal.Header onClose={onClose} capitonStyle={capitonStyle} title={title} closeStyle={closeStyle} hideCloseButton={hideCloseButton}/>
          {children}
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    // const {size} = this._reactInternalInstance._currentElement._owner._instance.props; 
    if (!!this.props.title) {
      return (
        <div>
          <div className={`wt-modal__header wt-modal__header--${_size} `}>
          { !this.props.hideCloseButton &&
            <i onClick={this.props.onClose} className="wt-modal__close" style={this.props.closeStyle}></i>
          }
            <span className="wt-modal__caption" style={this.props.capitonStyle}>{this.props.title}</span>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}


class Body extends React.Component {
  render() { 
    return (
      <div className={`wt-modal__body wt-modal__body--${_size} ${this.props.className}`} style={this.props.style} >
        {this.props.children}
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className={`wt-modal__footer wt-modal__footer--${_size}  ${this.props.className}`}>
          {this.props.children}
      </div>
    );
  }
}

Modal.defaultProps = {
  children: [],
  onClose: function(){},
  title: null,
  customClass: null,
  style: null,
  type : 'dialog',
  hidden: false
};

// Body.defaultProps = {
//   title: null,
// };

Modal.Footer = Footer;
Modal.Body = Body;
Modal.Header = Header;
