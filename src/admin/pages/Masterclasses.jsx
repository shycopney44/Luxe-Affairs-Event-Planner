import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Masterclasses() {
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/masterclass")
      .then((res) => {
        setSignups(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching masterclass signups:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Masterclass Signups</h2>
      <p className="text-sm text-slate-400 mb-6">
        Track all masterclass registrations and collaboration interests.
      </p>

      {loading ? (
        <p className="text-slate-400">Loading signups...</p>
      ) : signups.length === 0 ? (
        <p className="text-slate-500">No masterclass signups found.</p>
      ) : (
        <div className="overflow-x-auto border border-slate-800 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Business</th>
                <th className="p-3 text-left">Goals</th>
                <th className="p-3 text-left">Country</th>
                <th className="p-3 text-left">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {signups.map((mc) => (
                <tr
                  key={mc._id}
                  className="border-t border-slate-800 hover:bg-slate-900/40"
                >
                  <td className="p-3">{mc.name}</td>
                  <td className="p-3">{mc.email}</td>
                  <td className="p-3">{mc.phone}</td>
                  <td className="p-3">{mc.businessName}</td>
                  <td className="p-3">{mc.goals}</td>
                  <td className="p-3">{mc.country}</td>
                  <td className="p-3">
                    {new Date(mc.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
