import React from 'react'
import { PiCaretDown } from 'react-icons/pi';
import { BarChart } from '@mui/x-charts/BarChart';
function Chart() {
    return (
        <div className='bg-white rounded-lg p-3 my-3 w-96 md:w-[493px]'>
            <h1 className='text-sm font-semibold'>Weekly Savings</h1>
            <div className='flex justify-between my-3'>
                <p className='text-gray-500 text-xs'>Updated 1 weeks ago</p>
                <div className='flex border border-blue-300 rounded-full py-1 px-3'>
                    <p className='text-xs font-semibold text-blue-900'>March 2025</p>
                    <PiCaretDown className='font-semibold text-blue-900 mt-1 mx-1' size={10} />
                </div>
            </div>
            <div className=''>
            <BarChart
      xAxis={[{ scaleType: 'band', data: ['Week1', 'Week2', 'Week3'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={400}
      height={300}
    />
            </div>
        </div>
    )
}

export default Chart;