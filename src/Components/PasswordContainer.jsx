import React from 'react';

function PasswordContainer({ password, passwordReference, copyPassword }) {
  return (
    <div className='w-full flex flex-col md:flex-row gap-5'>
      <input 
        ref={passwordReference}
        value={password}
        readOnly
        className='w-full md:w-[90%] p-3 bg-slate-300 rounded-lg text-slate-800 font-semibold text-xl mb-4 md:mb-0'
        type="text" 
      />
      <button
        onClick={copyPassword}
        className='bg-blue-600 text-white font-semibold p-2 rounded-lg w-full md:w-auto'
      >
        Copy
      </button>
    </div>
  );
}

export default PasswordContainer;
