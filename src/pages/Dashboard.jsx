import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events/mine").then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <h2>Your Events</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
}
