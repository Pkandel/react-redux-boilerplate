import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './message.css';

class Message extends Component {
    constructor() {
        super();
        this.state = {display: true}
    }

    componentDidMount = () => {
        const {timeout} = this.props;
        timeout && setTimeout(() => {
            this.setState({display: false})
        }, timeout*1000);

    };

    handleClose = () => {
        this.setState({
            display: false
        })
    };

    render() {
        const { message, messageType} = this.props;
        const { display } = this.state;
        if(!display) {
            return null;
        }
        return (
            <div className="message-component">
                <div className={messageType}>
                    {message}
                    <span className="close" onClick={this.handleClose}> &#10006; </span>
                </div>
            </div>
        );
    }
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired,
    messageType: PropTypes.string.isRequired
};

export default Message;
