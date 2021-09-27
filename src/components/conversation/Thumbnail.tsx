import { Conversation } from "../../modules/conversations/types";

type Props = {
  conversation: Conversation;
};

const ConversationThumbnail = ({ conversation }: Props) => (
  <div>
    {conversation.senderNickname} speaking to {conversation.recipientNickname}
  </div>
);

export default ConversationThumbnail;
