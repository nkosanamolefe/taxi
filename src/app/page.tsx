import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-textPrimary min-h-screen flex flex-col items-center justify-center">
      {/* Background Illustration */}
      <div className="relative w-full max-w-4xl mx-auto px-4">
        

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Taxi Fair</h1>

        {/* Flight Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <div className="flex flex-col space-y-4">
            {/* Origin */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium">From:</label>
              <select className="flex-1 p-2 bg-gray-700 text-white rounded-md outline-none">
                <option>Johannesburg (JNB)</option>
                <option>Cape Town (CPT)</option>
                <option>Durban (DUR)</option>
              </select>
            </div>

            {/* Destination */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium">To:</label>
              <select className="flex-1 p-2 bg-gray-700 text-white rounded-md outline-none">
                <option>Where to?</option>
                <option>London (LHR)</option>
                <option>New York (JFK)</option>
                <option>Sydney (SYD)</option>
              </select>
            </div>

            {/* Passenger & Class */}
            <div className="auto items-center space-x-2">
              <label className="text-sm font-medium">Passengers:</label>
              <select className="flex-1 p-2 bg-gray-700 text-white rounded-md outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            {/* Submit Button */}
            <button className="bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
              Route and Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

