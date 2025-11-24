const EventCard = ({ title, date, time, location, notes }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-pink-500">
      <h2 className="text-xl font-semibold text-pink-600">{title}</h2>
      <p className="text-sm text-gray-600">{date} • {time}</p>
      <p className="mt-2 text-gray-700">📍 {location}</p>
      {notes && <p className="mt-2 italic text-gray-500">📝 {notes}</p>}
    </div>
  );
};

export default EventCard;
