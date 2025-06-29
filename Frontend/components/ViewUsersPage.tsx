"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import ThemeToggle from "./setTheme";

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ViewUsersPage() {
  const [users, setUsers] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  // Ensure theme toggle works only after mount

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/getmessage");
      if (!res.ok) throw new Error("Failed to fetch users.");
      const result = await res.json();
      const data = Array.isArray(result) ? result : result.data;
      setUsers(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `https://updated-portfolio-backend.onrender.com/api/v1/removemessage/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        alert("User Deleted Successfully!");
        fetchUsers(); // Refresh list
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      alert("Error deleting user: " + error);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/updatemessage/${id}`);
  };

  const backToHome = () => {
    router.push(`/`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            📬 User Messages
          </h1>
          <div className="flex gap-3 items-center">
            <button
              onClick={backToHome}
              className="w-full sm:w-auto min-w-[150px] max-w-full text-center
                         bg-white text-purple-600 border border-purple-500 
                         hover:bg-purple-600 hover:text-white 
                         dark:bg-gray-900 dark:text-purple-300 dark:border-purple-400 
                         dark:hover:bg-purple-700 dark:hover:text-white
                           font-semibold py-2 px-6 rounded transition duration-300"
            >
              🏠 Back to Home
            </button>

            <ThemeToggle />
          </div>
        </div>

        {/* Message List */}
        <div className="space-y-6">
          {loading && <p className="text-center text-gray-700">Loading...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          {!loading && users.length === 0 && (
            <p className="text-center text-gray-600">No messages found.</p>
          )}

          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition"
            >
              <div className="space-y-2">
                <p className="font-semibold text-lg text-gray-800 dark:text-white">
                  👤 Name: <span className="font-normal">{user.name}</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  📧 Email: <span className="font-medium">{user.email}</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  📝 Subject: {user.subject}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  💬 Message: {user.message}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => handleEdit(user._id)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  ✏️ Update Message
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition"
                >
                  🗑️ Delete Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
