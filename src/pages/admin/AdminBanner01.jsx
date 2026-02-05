import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5174";

function AdminBanner01() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [banners, setBanners] = useState([]);

  // Fetch banners from backend
  const fetchBanners = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/banners`);
      setBanners(res.data); // assuming backend returns array of banners
    } catch (err) {
      console.error("Failed to fetch banners:", err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("Please fill all fields and select an image!");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      const token = localStorage.getItem("token"); // if your API requires auth

      const res = await axios.post(`${BASE_URL}/api/banners`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      alert("Banner uploaded successfully!");

      // Refresh banners from backend
      fetchBanners();

      // Reset form
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error("Failed to upload banner:", err);
      alert("Failed to upload banner!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upload Banner</h1>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-lg mx-auto space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter banner title"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter banner description"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Banner Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Banner"}
        </button>
      </form>

      {/* Banners Table */}
      <div className="overflow-x-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Uploaded Banners</h2>
        <table className="min-w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">S.N</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Title</th>
            </tr>
          </thead>
         <tbody>
            {banners.map((banner, idx) => (
                <tr key={banner._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{idx + 1}</td>
                <td className="py-2 px-4 border">
                    <img
                    src={banner.image.url}  // Use URL from object
                    alt={banner.title}
                    className="w-24 h-16 object-contain"
                    />
                </td>
                <td className="py-2 px-4 border">{banner.title}</td>
                </tr>
            ))}
            </tbody>

        </table>
      </div>
    </div>
  );
}

export default AdminBanner01;
