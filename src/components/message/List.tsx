import { List } from "@mui/material";
import { useContext } from "react";
import { UserIdContext } from "../../modules/contexts";
import { Message } from "../../modules/messages/types";

type Props = {
  messages: Message[];
};

const MessageList = ({ messages }: Props) => {
  const userId = useContext(UserIdContext);

  return (
    <List>
      {messages.map((message) => (
        <div key={message.id}>{message.body}</div>
      ))}
    </List>
  );
};

export default MessageList;
