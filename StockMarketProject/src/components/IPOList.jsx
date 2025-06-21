import React, {useState, useEffect} from "react";
import { getIPO } from "../api/api";

const IPOList = () => {
    const [IPOList, setIPOList] = useState({});
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
                console.error(error);
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
            <div className="flex justify-center items-center h-48 text-gray-500 text-lg font-medium">
                Loading IPO data...
            </div>
        );
    }
    
    return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">IPO Listings</h2>

      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.keys(IPOList).map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)} ({IPOList[category].length})
          </option>
        ))}
      </select>

      {selectedCategory && IPOList[selectedCategory]?.length > 0 ? (
        <ul className="space-y-3 max-h-[400px] overflow-y-auto border border-gray-200 p-4 rounded-md bg-gray-50">
          {IPOList[selectedCategory].map((ipo, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow-sm rounded-md hover:bg-blue-50 transition"
            >
              <div className="font-semibold text-gray-800">{ipo.name}</div>
              <div className="text-sm text-gray-600">
                Symbol: <span className="font-medium">{ipo.symbol}</span> | SME:{" "}
                <span className={`font-medium ${ipo.is_sme ? "text-green-600" : "text-red-500"}`}>
                  {ipo.is_sme ? "Yes" : "No"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">No IPOs in this category.</div>
      )}
    </div>
  );
};

export default IPOList;
