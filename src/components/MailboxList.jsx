import { Link } from "react-router";
function MailboxList({ mailboxes }) {
  console.log(mailboxes);
  console.log(mailboxes[0]._id);
  return (
    <>
      <h2>All mailboxes</h2>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              {mailbox.name}
              {mailbox.size}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MailboxList;
