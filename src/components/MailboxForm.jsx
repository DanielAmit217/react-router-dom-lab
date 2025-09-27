import { useState } from "react";
function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState({
    boxSize: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    console.log(formData);
  };

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  return (
    <>
      <h1>Create new mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>Mailbox Size</label>
        <input
          type="text"
          value={formData.boxSize}
          onChange={handleChange}
          name="boxSize"
        />
        <label>Mailbox Name: </label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <button type="submit">Make New Mailbox</button>
      </form>
    </>
  );
}

export default MailboxForm;
