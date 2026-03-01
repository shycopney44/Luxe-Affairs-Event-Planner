import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/reviews")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <p className="text-sm text-slate-400 mb-6">
        See client feedback and testimonials captured through the site.
      </p>

      {loading ? (
        <p className="text-slate-400">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-slate-500">No reviews found.</p>
      ) : (
        <div className="overflow-x-auto border border-slate-800 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Rating</th>
                <th className="p-3 text-left">Event Type</th>
                <th className="p-3 text-left">Review</th>
                <th className="p-3 text-left">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((rev) => (
                <tr
                  key={rev._id}
                  className="border-t border-slate-800 hover:bg-slate-900/40"
                >
                  <td className="p-3">{rev.name}</td>
                  <td className="p-3">{rev.rating} / 5</td>
                  <td className="p-3">{rev.eventType}</td>
                  <td className="p-3 max-w-xs truncate">{rev.review}</td>
                  <td className="p-3">
                    {new Date(rev.createdAt).toLocaleDateString()}
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
