import { useState } from "react";
import API from "../services/api";

function ComplaintForm({ onComplaintSubmit }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/complaints", formData);

      alert("Complaint Submitted Successfully");
      onComplaintSubmit();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto"
    >

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Complaint Category"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

      </div>

      <textarea
        rows="5"
        name="description"
        placeholder="Complaint Description"
        className="w-full border p-3 rounded-lg mt-5"
        onChange={handleChange}
      ></textarea>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-5 hover:bg-blue-700">
        Submit Complaint
      </button>

    </form>
  );
}

export default ComplaintForm;