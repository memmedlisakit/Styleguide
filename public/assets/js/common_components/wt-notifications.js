import React, { PropTypes } from 'react'

class Notifications extends React.Component {
constructor(){
  super()
  this.state = {
    show:true
  }
}
  render() { 
    let { error, success, warning } = this.props;
    const close = (<i className="wt-icon wt-icon-close-white wt-notification__close"   onClick={() => {this.setState({show:false})}}></i>)
    return (
      <div>
        { error && this.state.show &&
          <div className="wt-notification wt-notification__error">
            {error}
            {close}
          </div>
        }
        { warning && this.state.show &&
          <div className="wt-notification wt-notification__warning">
            {warning}
            {close}
          </div>
        }
        { success && this.state.show &&
          <div className="wt-notification wt-notification__success">
            {success}
            {close}
          </div>
        }
      </div>
    );
  }
}

Notifications.defaultProps = {
  error: null,
  success: null,
  warning: null
};


export default Notifications;
