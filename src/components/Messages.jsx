import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const actionCreators = {};

class Messages extends React.Component {
  render() {
    const { messages, currentChannelId } = this.props;
    const currentMessages = messages.filter(({ channelId }) => channelId === currentChannelId);
    return (
      <div className="messages-container overflow-auto">
        {currentMessages
          && currentMessages.map(({ text, id, userName }) => (
            <div key={id}>
              <b>{userName}</b>
              {': '}
              {text}
            </div>
          ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Messages);
