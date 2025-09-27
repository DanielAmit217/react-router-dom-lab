import NavBar from "./components/NavBar.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";
import MailboxList from "./components/MailboxList.jsx";

import { useState } from "react";
import { Route, Routes } from "react-router";

function App() {
  const [mailboxes, setMailboxes] = useState([
    { name: "danny", size: "10", _id: 0 },
    { name: "jonny", size: "11", _id: 1 },
  ]);
  const [letters, setLetters] = useState([]);

  const addLetter = (letterData) => {
    setLetters;
  };

  const addBox = (mailboxData) => {
    console.log(mailboxData);
    mailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, mailboxData]);
    console.log(mailboxes);
  };

  return (
    <>
      <NavBar />
      <h1>Mailboxes</h1>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/new-letter"
          element={<letterForm mailboxes={mailboxes} letters={letters} />}
        />
      </Routes>
    </>
  );
}

export default App;
