import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messagesInfo.messages,
    currentChannelId: state.channelsInfo.currentChannelId,
  };
  return props;
};

const Messages = (props) => {
  const { messages, currentChannelId } = props;
  const currentMessages = messages.filter(({ channelId }) => channelId === currentChannelId);

  return (
    <div className="messages-container overflow-auto bg-light text-dark p-3 mb-3 h-100">
      {currentMessages
        && currentMessages.map(({ text, id, userName }) => (
          <div key={id}>
            <b>{userName}</b>
            :&nbsp;
            {text}
          </div>
        ))}
    </div>
  );
};

export default connect(mapStateToProps, null)(Messages);
