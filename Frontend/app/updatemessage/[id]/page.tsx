"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const UpdatePage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [editData, setEditData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/getmessage/${id}`);
        const data = await res.json();
        setEditData(data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    if (id) fetchUser();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/updatemessage/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );

      if (!res.ok) throw new Error("Update failed");

      alert("Message Updated Successfully...!");
      router.push("/viewusers");
    } catch (error) {
      console.error("Update error:", error);
      alert("Update failed!");
    } finally {
      setLoading(false);
    }
  };

  const backToDashBoard = () => router.push("/viewusers");
  const backToHome = () => router.push("/");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Top Buttons */}
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <button
            onClick={backToDashBoard}
            className="flex-1 min-w-[150px] bg-white text-purple-600 border border-purple-500 
              hover:bg-purple-600 hover:text-white 
              dark:bg-gray-900 dark:text-purple-300 dark:border-purple-400 
              dark:hover:bg-purple-700 dark:hover:text-white 
              font-semibold py-2 px-6 rounded transition duration-300"
          >
            ⬅️ Back to Dashboard
          </button>

          <button
            onClick={backToHome}
            className="flex-1 min-w-[150px] bg-white text-purple-600 border border-purple-500 
              hover:bg-purple-600 hover:text-white 
              dark:bg-gray-900 dark:text-purple-300 dark:border-purple-400 
              dark:hover:bg-purple-700 dark:hover:text-white 
              font-semibold py-2 px-6 rounded transition duration-300"
          >
            🏠 Back to Home
          </button>
        </div>

        {/* Update Form */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
            Update Message
          </h2>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 outline-none 
                  dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 outline-none 
                  dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={editData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 outline-none 
                  dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={editData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-purple-500 outline-none resize-none 
                  dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg text-white font-semibold transition duration-300 ${
                loading
                  ? "bg-purple-300 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {loading ? "Updating..." : "Update Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
