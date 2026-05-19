import { useEffect, useState } from "react";
import API from "../services/api";

function ComplaintList() {

  const [complaints, setComplaints] = useState([]);

  const [searchLocation, setSearchLocation] =
    useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("");

  const [aiResult, setAiResult] = useState("");

  useEffect(() => {
    fetchComplaints();
  }, []);

  // FETCH ALL COMPLAINTS

  const fetchComplaints = async () => {

    try {

      const res = await API.get("/complaints");

      setComplaints(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // UPDATE STATUS

  const updateStatus = async (id, status) => {

    try {

      await API.put(`/complaints/${id}`, {
        status,
      });

      fetchComplaints();

    } catch (error) {

      console.log(error);

    }
  };

  // AI ANALYSIS

  const analyzeComplaint = async (
  description,
  category
) => {

  try {

    const res = await API.post(
      "/ai/analyze",
      {
        description,
        category,
      }
    );

    console.log(res.data);

    setAiResult(res.data.aiResult);

  } catch (error) {

    console.log(error);

    alert("AI Analysis Failed");

  }
};

  // FILTER LOGIC

  const filteredComplaints =
    complaints.filter((item) => {

      return (
        item.location
          .toLowerCase()
          .includes(
            searchLocation.toLowerCase()
          ) &&
        item.category
          .toLowerCase()
          .includes(
            categoryFilter.toLowerCase()
          )
      );
    });

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADING */}

      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        Complaint Tracking System
      </h1>

      {/* SEARCH + FILTER */}

      <div className="bg-white p-6 rounded-2xl shadow-xl mb-8 flex flex-col md:flex-row gap-5">

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search by Location"
          value={searchLocation}
          onChange={(e) =>
            setSearchLocation(e.target.value)
          }
          className="border p-3 rounded-lg flex-1"
        />

        {/* FILTER */}

        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
          className="border p-3 rounded-lg"
        >
          <option value="">
            Filter By Category
          </option>

          <option value="Water">
            Water
          </option>

          <option value="Electricity">
            Electricity
          </option>

          <option value="Garbage">
            Garbage
          </option>

        </select>

      </div>

      {/* TABLE */}

      <div className="bg-white p-8 rounded-2xl shadow-xl overflow-x-auto">

        <h2 className="text-3xl font-bold mb-6">
          Complaint List
        </h2>

        <table className="w-full border">

          <thead>

            <tr className="bg-blue-100">

              <th className="p-3 border">
                Name
              </th>

              <th className="p-3 border">
                Title
              </th>

              <th className="p-3 border">
                Category
              </th>

              <th className="p-3 border">
                Location
              </th>

              <th className="p-3 border">
                Status
              </th>

              <th className="p-3 border">
                AI Analysis
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredComplaints.map((item) => (

              <tr
                key={item._id}
                className="text-center"
              >

                <td className="p-3 border">
                  {item.name}
                </td>

                <td className="p-3 border">
                  {item.title}
                </td>

                <td className="p-3 border">
                  {item.category}
                </td>

                <td className="p-3 border">
                  {item.location}
                </td>

                {/* STATUS UPDATE */}

                <td className="p-3 border">

                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateStatus(
                        item._id,
                        e.target.value
                      )
                    }
                    className="border p-2 rounded-lg"
                  >

                    <option>
                      Pending
                    </option>

                    <option>
                      In Progress
                    </option>

                    <option>
                      Resolved
                    </option>

                  </select>

                </td>

                {/* AI BUTTON */}

                <td className="p-3 border">

                  <button
                    onClick={() =>
                      analyzeComplaint(
                        item.description,
                        item.category
                      )
                    }
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                  >
                    Analyze
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* AI RESULT SECTION */}

      {aiResult && (

        <div className="bg-purple-100 p-8 rounded-2xl shadow-xl mt-10">

          <h2 className="text-3xl font-bold text-purple-700 mb-5">
            AI-Based Complaint Analysis
          </h2>

          <div className="bg-white p-6 rounded-xl whitespace-pre-line">
            {aiResult}
          </div>

        </div>

      )}

    </div>
  );
}

export default ComplaintList;