import { useState } from "react";

import ComplaintForm from "../components/ComplaintForm";
import ComplaintList from "../components/ComplaintList";

function Home() {

  const [showOptions, setShowOptions] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("");

  // AFTER REGISTRATION

  const handleComplaintSubmit = () => {

    setShowOptions(true);

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      {/* HEADING */}

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        AI Complaint Management System
      </h1>

      {/* COMPLAINT FORM */}

      <ComplaintForm
        onComplaintSubmit={handleComplaintSubmit}
      />

      {/* OPTIONS AFTER SUBMISSION */}

      {showOptions && (

        <div className="mt-10 bg-white p-8 rounded-2xl shadow-xl">

          <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
            Complaint Services
          </h2>

          <div className="flex flex-col md:flex-row gap-5 justify-center">

            {/* TRACKING */}

            <button
              onClick={() =>
                setActiveSection("tracking")
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Complaint Tracking
            </button>

            {/* COMPLAINT LIST */}

            <button
              onClick={() =>
                setActiveSection("list")
              }
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Complaint List
            </button>

            {/* AI ANALYSIS */}

            <button
              onClick={() =>
                setActiveSection("ai")
              }
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              AI Tracking
            </button>

          </div>

        </div>
      )}

      {/* SECTIONS */}

      <div className="mt-10">

        {/* TRACKING */}

        {activeSection === "tracking" && (

          <div className="bg-white p-8 rounded-2xl shadow-xl">

            <h2 className="text-4xl font-bold mb-6 text-blue-700">
              Complaint Tracking
            </h2>

            <ComplaintList />

          </div>
        )}

        {/* COMPLAINT LIST */}

        {activeSection === "list" && (

          <div className="bg-white p-8 rounded-2xl shadow-xl">

            <h2 className="text-4xl font-bold mb-6 text-green-700">
              Complaint List
            </h2>

            <ComplaintList />

          </div>
        )}

        {/* AI TRACKING */}

        {activeSection === "ai" && (

          <div className="bg-white p-8 rounded-2xl shadow-xl">

            <h2 className="text-4xl font-bold mb-6 text-purple-700">
              AI-Based Complaint Analysis
            </h2>

            <ComplaintList />

          </div>
        )}

      </div>

    </div>
  );
}

export default Home;