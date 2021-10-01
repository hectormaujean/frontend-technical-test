import { Ref, useContext } from "react";
import { ListItem } from "@mui/material";

import { UserIdContext } from "../../modules/contexts";

import { getBubbleStyles } from "./styles";
import { Box } from "@mui/system";

type Props = {
  body: string;
  authorId: number;
  previousMessageAuthor: number | undefined;
  nextMessageAuthor: number | undefined;
  scrollRef: Ref<HTMLLIElement> | undefined;
};

const MessageBubble = ({
  body,
  authorId,
  previousMessageAuthor,
  nextMessageAuthor,
  scrollRef,
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
      ref={scrollRef}
    >
      {body}
    </ListItem>
  );
};

export default MessageBubble;
