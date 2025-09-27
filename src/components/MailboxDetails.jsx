import { useParams } from "react-router";
import { useState, useEffect } from "react";

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const [boxDetails, setBoxDetails] = useState({});
  const [error, setError] = useState(null);
  console.log(mailboxes[mailboxId]);

  const findMailbox = () => {
    const selectedBox = mailboxes.find((mailbox) => {
      return mailbox._id === Number(mailboxId);
    });

    setBoxDetails(selectedBox);
  };

  useEffect(() => {
    findMailbox();
  }, []);

  return (
    <div>
      <h2>{boxDetails.name}'s Box</h2>
      <h3>size: {boxDetails.size}</h3>
    </div>
  );
}

export default MailboxDetails;
