export default function InquiryModal({ inquiry, onClose, onDelete }) {
  if (!inquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 w-full max-w-lg shadow-xl">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Inquiry Details</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-slate-300">
          <p><strong>Name:</strong> {inquiry.name}</p>
          <p><strong>Email:</strong> {inquiry.email}</p>
          <p><strong>Phone:</strong> {inquiry.phone}</p>
          <p><strong>Event Date:</strong> {inquiry.date}</p>
          <p><strong>Guests:</strong> {inquiry.guests}</p>
          <p><strong>Event Type:</strong> {inquiry.eventType}</p>
          <p><strong>Message:</strong> {inquiry.message}</p>
          <p><strong>Submitted:</strong> {new Date(inquiry.createdAt).toLocaleString()}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onDelete(inquiry._id)}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md text-white mr-3"
          >
            Delete
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-md text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
