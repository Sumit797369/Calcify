import React, { useState } from 'react'

function Calculator() {
    const[result,setResult]=useState('');
    const clickhandle =(e)=>{
        setResult(result.concat(e.target.value));
    }
    const clearScreen =()=>{
        setResult('')
    }
    const calculate =()=>{
        setResult(eval(result).toString())
    }

  return (
    <div className='bg-gray-500 text-white w-screen h-screen flex justify-center items-center'>
        <div className="main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-400">
            <div className="screen p-2">
                <input value={result} type="text" className=' text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 pt-10 rounded-lg bg-gray-100 outline-none text-right' placeholder='0'/>
            </div>
            <div className="brand bg-gray-200 bg-opacity-90 mb-2">
                <h1 className='text-gray-900 text-xs font-bold text-center'>Sumit</h1>
            </div>
            <div className="keyboard">
               <div className="flex justify-between m-2">
                    <input onClick={ clearScreen} type="button" value="c" className='bg-red-300 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="<" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="%" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="/" className='bg-pink-300 w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>

               <div className="flex justify-between m-2">
                    <input onClick={clickhandle} type="button" value="7" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="8" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="9" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="*" className='bg-green-300 w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>

               <div className="flex justify-between m-2">
                    <input onClick={clickhandle} type="button" value="4" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="5" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="6" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="-" className='bg-purple-300 w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
               <div className="flex justify-between m-2">
                    <input onClick={clickhandle} type="button" value="1" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="2" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="3" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="+" className='bg-pink-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
               <div className="flex justify-between m-2">
                    <input onClick={clickhandle} type="button" value="0" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="00" className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={clickhandle} type="button" value="." className='bg-gray-200 w-12 h-12 rounded-lg text-center text-black font-medium' />
                    <input onClick={calculate} type="button" value="=" className='bg-orange-300 w-12 h-12 rounded-lg text-center text-black font-medium' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator