import React from 'react'

type RadioProps = {
    index: string;
    name: string;
    value: string;
}

export const Radio = ({ index, name, value }: RadioProps) => {
    return (
        <div className='md:w-[45%] w-full'>
            <label className="w-full flex items-center">
                <span className="font-bold text-black mr-3">{index}</span>
                <input type="radio" name={name} value={value} className="peer hidden" />
                <div className="w-full bg-white text-[#000000cc] peer-checked:text-black py-2 px-4 rounded  cursor-pointer peer-checked:border peer-checked:border-solid peer-checked:border-black peer-checked:font-medium transition duration-200 border border-solid border-[transparent]">
                    {value}
                    
                </div>
            </label>
        </div>
    )
}
