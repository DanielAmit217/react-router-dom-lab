import { useParams } from "react-router";
function MailboxDetails() {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = props.letters.filter((letter) => {
    letter.mailboxId === Number(mailboxId);
  });

  return <div className="mail-box">MailboxDetails</div>;
}

export default MailboxDetails;
