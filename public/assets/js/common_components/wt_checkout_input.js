import React from 'react';
import { makeid } from './utils';

export default class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { val: '' };
    }

    componentDidMount() {
        this.setState({ val: this.refs.input.value });
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextProps.value !== this.props.value)
            this.setState({ val: this.refs.input.value });
    }

    handleChange(e) {
        this.setState({ val: this.refs.input.value });
        if (this.props.onChange)
            this.props.onChange(e);
    }

    handleEditIcon(e) {
        if (this.props.onEditIconClick)
            this.props.onEditIconClick(e);
    }

    handleFocus(e) {
        this.setState({ val: true });
        if (this.props.onFocus)
            this.props.onFocus(e);
    }

    handleBlur(e) {
        this.setState({ val: this.refs.input.value });
        if (this.props.onBlur)
            this.props.onBlur(e);
    }

    render() {
        const {
            validationMessage,
            label,
            id,
            bsStyle,
            className,
            formClass,
            formStyle,
            required,
            edit,
            children,
            ...attributes
            } = this.props;
        const uniqueId = id || makeid();

        const helpBlock = validationMessage ?
            <span className="checkout-form__message--error">{validationMessage}</span> :
            null;
        const star = <span className="checkout-form__star">*</span>
        const labelBlock = label ?
            <label htmlFor={uniqueId} className={`checkout-form__label ${!(this.state.val || this.props.value) ? "" : "checkout-form__label--focus"}`}>
                {label} {required ? star : ''}
            </label> :
            null;
        const editIcon = edit ?
            <img src="/assets/icons/wt-icon-edit.svg" className="wt-icon-pencil--input"
                onClick={this.handleEditIcon.bind(this)} alt="edit" /> : null;

        return (
            <div className={`checkout-form ${formClass}`} style={formStyle}>
                {labelBlock}
                {
                    children ? (
                        React.Children.map(children, child =>
                            React.cloneElement(child, {
                                onFocus: this.handleFocus.bind(this),
                                onBlur: this.handleBlur.bind(this),
                                onChange: this.handleChange.bind(this),
                                id: uniqueId,
                                ref: 'input',
                                value: this.props.value,
                                className: `checkout-form__input checkout-form__input--${bsStyle} ${className}`
                            })
                        )
                    ) : (<input type="text" {...attributes} id={uniqueId} ref='input'
                        className={`checkout-form__input checkout-form__input--${bsStyle} ${className}`}
                        onChange={this.handleChange.bind(this)}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                    />)
                }
                {editIcon}
                {helpBlock}
            </div>
        );
    }
}