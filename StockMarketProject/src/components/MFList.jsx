import React, { useEffect, useState } from "react";
import { getIPO } from "../api/api";

const IPOList = () => {
  const [ipoList, setIPOList] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIPOData = async () => {
      try {
        const data = await getIPO();
        setIPOList(data);

        const firstCategory = Object.keys(data)[0] || "";
        setSelectedCategory(firstCategory);
      } catch (error) {
        console.error("Error fetching IPO data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIPOData();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 text-gray-600 text-lg font-semibold">
        Loading IPO data...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Select IPO Category</h2>

      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          -- Select Category --
        </option>
        {Object.keys(ipoList).map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)} ({ipoList[category].length})
          </option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            IPOs in "{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}"
          </h2>
          <ul className="space-y-2 max-h-80 overflow-auto border border-gray-200 rounded-md p-4 bg-gray-50">
            {ipoList[selectedCategory]?.map((ipo, index) => (
              <li
                key={index}
                className="p-3 bg-white rounded-md shadow-sm hover:bg-blue-50 transition cursor-default"
              >
                <span className="font-medium text-gray-800">{ipo.name}</span> ({ipo.symbol}) — SME:{" "}
                <span className={ipo.is_sme ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                  {ipo.is_sme ? "Yes" : "No"}
                </span>
              </li>
            )) || <li className="text-gray-500">No IPOs available</li>}
          </ul>
        </>
      )}
    </div>
  );
};

export default IPOList;
