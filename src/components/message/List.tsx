import { List } from "@mui/material";

import { Message } from "../../modules/messages/types";

import MessageBubble from "./Bubble";

type Props = {
  messages: Message[];
};

const MessageList = ({ messages }: Props) => {
  return (
    <List>
      {messages.map(({ id, body, authorId }, i) => (
        <MessageBubble
          key={id}
          body={body}
          authorId={authorId}
          previousMessageAuthor={messages[i - 1]?.authorId}
          nextMessageAuthor={messages[i + 1]?.authorId}
        />
      ))}
    </List>
  );
};

export default MessageList;
