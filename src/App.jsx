import NavBar from "./components/NavBar.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";
import MailboxList from "./components/MailboxList.jsx";
import letterForm from "./components/letterForm.jsx";

import { useState } from "react";
import { Route, Routes } from "react-router";

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addLetter = (letterData) => {
    setLetters;
  };

  const addBox = (mailboxData) => {
    mailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, mailboxData]);
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
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
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
