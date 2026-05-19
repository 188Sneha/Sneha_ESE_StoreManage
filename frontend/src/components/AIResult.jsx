function AIResult() {

  return (

    <div className="mt-10 bg-purple-100 p-6 rounded-2xl">

      <h1 className="text-3xl font-bold mb-5 text-purple-700">
        AI Complaint Analysis
      </h1>

      <div className="space-y-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">
            Urgency Detection
          </h2>

          <p>High Priority</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">
            Suggested Department
          </h2>

          <p>Water Department</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">
            Complaint Summary
          </h2>

          <p>
            Water pipeline damaged near market area.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-bold">
            Auto Response
          </h2>

          <p>
            Your complaint has been registered successfully.
          </p>
        </div>

      </div>

    </div>
  );
}

export default AIResult;