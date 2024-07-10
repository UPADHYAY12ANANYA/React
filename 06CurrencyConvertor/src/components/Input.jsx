import React from 'react';

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""

}){
    const amountInputId = useId()
    return(
        <div className={`bg-white p-3 rounded-lg text-sm
        flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black/40 mb-2 
                inline-block'>{label} 
                </label>
                <input
                    id={amountInputId}
                    className='outline-none w-full bg-transparent'
                    type="number"
                    placeholder='Amount'
                    disabled = {amountDisable}
                    onChange = {(e)=>onAmountChange &&       //&& is used as a check that the amount feild is not empty
                    onAmountChange(Number(e.target.value))
                    }
                />
            </div>
            <div className='w-1/2 flex felx-wrap justify-end 
            text-right'>
                <p className= 'text-black/40 mb-2 w-full'>
                Currency Type</p>
                <select className='rounded-lg px-1 py-1 
                bg-gray-100 cursor-pointer outline-none'
                value = {selectCurrency}
                onChange={(e)=>onCurrencyChange &&
                    onCurrencyChange(e.target.value)}
                disabled = {currencyDisable}
                > 
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value="usd">
                            {currency}
                        </option>
                    ))}
                    
                </select>

            </div>

        </div>
    )

}
export default Input;
