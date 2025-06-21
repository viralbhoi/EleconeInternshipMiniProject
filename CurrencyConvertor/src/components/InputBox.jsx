import React from "react";
import { useId } from "react";

const InputBox = ({
    label,
    amount,
    onAmountChange,
    selectCurrency = "usd",
    onCurrencyChange,
    currencyOption = [],
    amountDisable = false,
    currencyDisable = false,
}) => {
    const amountInputId = useId();
    return (
        <div className="bg-white p-4 rounded-lg text-sm shadow-md w-full">
            <div className="flex flex-row items-start justify-between gap-4">
                <div className="flex flex-col flex-1 gap-4">
                    <label
                        htmlFor={amountInputId}
                        className="text-gray-500 mb-1 block"
                    >
                        {label}
                    </label>
                    <input
                        className="inline-block w-1/2"
                        id={amountInputId}
                        type="number"
                        placeholder="Amount"
                        disabled={amountDisable}
                        value={amount}
                        min="0"
                        step="0.01"
                        onChange={(e) => {
                            const val = e.target.value;

                            if (
                                val === "" ||
                                /^(\d+(\.\d*)?|\.\d*)$/.test(val)
                            ) {
                                onAmountChange && onAmountChange(val);
                            }
                        }}
                    />
                </div>
                <div className="flex flex-col items-end min-w-[110px]">
                    <p className="text-gray-500 mb-1">Currency Type</p>

                    <select
                        className="rounded-md px-3 py-2 bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-200"
                        value={selectCurrency}
                        onChange={(e) =>
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }
                        disabled={currencyDisable}
                    >
                        {currencyOption.map((currency) => (
                            <option
                                value={currency}
                                key={currency}
                                className="hover:bg-gray-100"
                            >
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default InputBox;
