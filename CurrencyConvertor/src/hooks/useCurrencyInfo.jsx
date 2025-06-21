import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                // console.log("Currency data:", res.data[currency]); // Debug (optional)
                setData(res.data[currency]);
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setData({});
            }
        };

        if (currency) {
            fetchData();
        }
    }, [currency]);

    return data;
}

export default useCurrencyInfo;