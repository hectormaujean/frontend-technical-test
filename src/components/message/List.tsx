import { List } from "@mui/material";
import { useEffect, useRef } from "react";

import { Message } from "../../modules/messages/types";

import MessageBubble from "./Bubble";

type Props = {
  messages: Message[];
};

const MessageList = ({ messages }: Props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <List>
      {messages.map(({ id, body, authorId }, i) => (
        <MessageBubble
          key={id}
          body={body}
          authorId={authorId}
          previousMessageAuthor={messages[i - 1]?.authorId}
          nextMessageAuthor={messages[i + 1]?.authorId}
          scrollRef={i === messages.length - 1 ? scrollRef : undefined}
        />
      ))}
    </List>
  );
};

export default MessageList;
