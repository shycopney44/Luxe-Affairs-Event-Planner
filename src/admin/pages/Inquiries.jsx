import { useEffect, useState } from "react";
import api from "../../api/axios";
import InquiryModal from "../components/InquiryModal"; // ⭐ IMPORTANT

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⭐ Modal state
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    api
      .get("/inquiries")
      .then((res) => {
        setInquiries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching inquiries:", err);
        setLoading(false);
      });
  }, []);

  // ⭐ DELETE HANDLER
  const handleDelete = async (id) => {
    try {
      await api.delete(`/inquiries/${id}`);

      // Remove deleted inquiry from UI
      setInquiries((prev) => prev.filter((inq) => inq._id !== id));

      // Close modal
      setSelectedInquiry(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Inquiries</h2>
      <p className="text-sm text-slate-400 mb-6">
        View and manage all client inquiries submitted from the site.
      </p>

      {loading ? (
        <p className="text-slate-400">Loading inquiries...</p>
      ) : inquiries.length === 0 ? (
        <p className="text-slate-500">No inquiries found.</p>
      ) : (
        <div className="overflow-x-auto border border-slate-800 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Event Date</th>
                <th className="p-3 text-left">Guests</th>
                <th className="p-3 text-left">Event Type</th>
                <th className="p-3 text-left">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((inq) => (
                <tr
                  key={inq._id}
                  onClick={() => setSelectedInquiry(inq)} // ⭐ CLICK HANDLER
                  className="border-t border-slate-800 hover:bg-slate-900/40 cursor-pointer"
                >
                  <td className="p-3">{inq.name}</td>
                  <td className="p-3">{inq.email}</td>
                  <td className="p-3">{inq.phone}</td>
                  <td className="p-3">{inq.date}</td>
                  <td className="p-3">{inq.guests}</td>
                  <td className="p-3">{inq.eventType}</td>
                  <td className="p-3">
                    {new Date(inq.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ⭐ MODAL RENDER */}
      {selectedInquiry && (
        <InquiryModal
          inquiry={selectedInquiry}
          onClose={() => setSelectedInquiry(null)}
          onDelete={handleDelete}   // ⭐ NEW
        />
      )}
    </section>
  );
}
