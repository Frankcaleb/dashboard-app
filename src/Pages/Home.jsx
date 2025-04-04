import React from 'react'
import { IoSearchOutline, IoWaterOutline, IoWifiOutline, IoHomeOutline } from 'react-icons/io5';
import { FaCaretDown } from 'react-icons/fa6';
import { GiSettingsKnobs } from 'react-icons/gi';
import { FiPhone } from 'react-icons/fi';
import { PiCaretRight } from 'react-icons/pi';
import { BsLightningCharge } from 'react-icons/bs';
import Chart from '../Components/Chart';
function Home() {
  return (
    <div className='py-5  w-96 md:w-[955px]'>
      <h1 className='font-bold text-blue-900'>Savings and Finance Dashboard</h1>
      <div className='md:flex '>
        <div className='flex'>
          <div className='flex my-3 bg-white rounded-full py-2 px-3 w-80 md:w-[500px]'>
            <IoSearchOutline size={14} className='mt-0.5' />
            <p className='text-sm mx-2'>Search</p>
          </div>
          <p className='m-3 bg-blue-900 text-white px-3 py-1 rounded-sm '>+</p>
        </div>
        <div className='flex text-sm my-3 md:my-5 md:ml-40'>
          <div className='flex'>
            <p>Sort by</p>
            <FaCaretDown size={10} className='mx-2 mt-1' />
          </div>
          <div className='flex mx-3'>
            <p>Saved Search</p>
            <FaCaretDown size={10} className='mx-2 mt-1' />
          </div>
          <GiSettingsKnobs size={20} />
        </div>

      </div>
      <div className='md:flex'>
        <div>
          <div className='md:flex'>
            <div>
              <div className='bg-white rounded-sm w-80 md:mx-0 mx-7 md:w-56 h-[286px] px-5 md:px-2 py-3'>
                <h1 className='text-sm font-semibold'>Savings</h1>
                <p className='text-sm text-gray-500'>$39,226</p>
                <p className='text-5xl font-bold mt-18 text-center'>82%</p>
                <p className='text-center text-gray-500 mb-10'>Value Name</p>
              </div>

            </div>

            <div className='md:mx-3 mx-7 my-3 md:my-0'>
              <div className='bg-white rounded-lg px-2 py-3 w-80 md:w-64'>
                <h1 className='text-sm font-semibold'>income</h1>
                <div className='flex'>
                  <p className='font-bold text-2xl mt-5'>$27632</p>
                  <p className='text-green-500 text-sm mt-7'>+2.5%</p>
                </div>
                <p className='text-sm text-gray-500 pt-1 pb-2'>Compared to ($21364 last year)</p>
              </div>
              <div className='bg-white rounded-lg px-2 py-3 w-80 md:w-64 mt-3 md:mt-2'>
                <h1 className='text-sm font-semibold'>Expenses</h1>
                <div className='flex'>
                  <p className='font-bold text-2xl mt-5'>$20632</p>
                  <p className='text-green-500 text-sm mt-7'>-2.5%</p>
                </div>
                <p className='text-sm text-gray-500 pt-1'>Compared to ($23364 last year)</p>
                <p className='text-sm text-gray-500 py-2'>You have spent $2732 less</p>
              </div>
            </div>
          </div>
          <Chart/>
        </div>

        <div className='mx-7 md:mx-5'>
          <div className='bg-white rounded-sm text-sm w-72 mx-5 py-3 px-5'>
            <h1 className='font-semibold'>Recent Activities</h1>
            <div className='flex my-3 '>
              <BsLightningCharge className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Electric Bill</h1>
                <p className='text-xs text-gray-500'>Success</p>
              </div>
              <PiCaretRight className='ml-[100px] mt-3 text-gray-500' />
            </div>
            <div className='flex my-3 '>
              <IoWaterOutline className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Water Installment</h1>
                <p className='text-xs text-gray-500'>Success</p>
              </div>
              <PiCaretRight className='ml-[56px] mt-3 text-gray-500' />
            </div>
            <div className='flex my-3 '>
              <FiPhone className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Phone Bill</h1>
                <p className='text-xs text-gray-500'>Success</p>
              </div>
              <PiCaretRight className='ml-[104px] mt-3 text-gray-500' />
            </div>
            <div className='flex my-3 '>
              <IoWifiOutline className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Internet Bill</h1>
                <p className='text-xs text-gray-500'>Success</p>
              </div>
              <PiCaretRight className='ml-[93px] mt-3 text-gray-500' />
            </div>
            <div className='flex my-3'>
              <IoHomeOutline className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Home Rental</h1>
                <p className='text-xs text-gray-500'>Success</p>
              </div>
              <PiCaretRight className='ml-[84px] mt-3 text-gray-500' />
            </div>

          </div>
          <div className='bg-white rounded-sm text-sm w-72 mx-5 my-3 py-3 px-5'>
            <h1 className='font-semibold'>Upcoming Payments</h1>
            <p className='text-gray-500 text-xs'>April 2025</p>

            <div className='flex my-3'>
              <IoHomeOutline className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Home Rental</h1>
                <p className='text-xs text-gray-500'>April 15, 2025</p>
              </div>
              <PiCaretRight className='ml-[86px] mt-3 text-gray-500' />
            </div>

            <div className='flex my-3 '>
              <IoWaterOutline className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Water Installment</h1>
                <p className='text-xs text-gray-500'>April 20, 2025</p>
              </div>
              <PiCaretRight className='ml-[56px] mt-3 text-gray-500' />
            </div>
            <div className='flex my-3 '>
              <FiPhone className='bg-blue-100 text-blue-500 p-2 rounded-sm mt-1 ' size={32} />
              <div className='mx-3'>
                <h1 className='font-semibold'>Phone Bill</h1>
                <p className='text-xs text-gray-500'>April 22, 2025</p>
              </div>
              <PiCaretRight className='ml-[95px] mt-3 text-gray-500' />
            </div>



          </div>
        </div>
      </div>


    </div>
  )
}

export default Home;