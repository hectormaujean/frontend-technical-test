import { useContext } from "react";
import { ListItem } from "@mui/material";

import { UserIdContext } from "../../modules/contexts";

import { getBubbleStyles } from "./styles";

type Props = {
  body: string;
  authorId: number;
  previousMessageAuthor: number | undefined;
  nextMessageAuthor: number | undefined;
};

const MessageBubble = ({
  body,
  authorId,
  previousMessageAuthor,
  nextMessageAuthor,
}: Props) => {
  const userId = useContext(UserIdContext);

  const isLoggedUserMessage = userId === authorId;

  return (
    <ListItem
      sx={getBubbleStyles(
        isLoggedUserMessage,
        authorId,
        previousMessageAuthor,
        nextMessageAuthor
      )}
    >
      {body}
    </ListItem>
  );
};

export default MessageBubble;
