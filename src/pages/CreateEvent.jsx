import { useState } from "react";
import api from "../api/axios";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/events", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <input type="time" onChange={(e) => setForm({ ...form, time: e.target.value })} />
      <input placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <textarea placeholder="Notes" onChange={(e) => setForm({ ...form, notes: e.target.value })} />
      <button type="submit">Create Event</button>
    </form>
  );
}
