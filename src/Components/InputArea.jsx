import React from 'react';

function InputArea({ length, changeLength, changeSpecialCharacter }) {
  return (
    <div className='w-full p-4 flex flex-col md:flex-row mt-4 justify-between items-center'>
      <div className='flex flex-col md:flex-row items-center w-full md:w-auto mb-4 md:mb-0'>
        <label
          className='mr-5 font-semibold mb-2 md:mb-0'
          htmlFor="range">Set length ({length}) : </label>
        <input
          value={length}
          onChange={changeLength}
          max={100}
          min={10}
          type="range"
          className='w-full md:w-auto'
        />
      </div>
      <div className='flex items-center w-full md:w-auto'>
        <input
          onChange={changeSpecialCharacter}
          className='mr-3'
          name='specialCharacter'
          type="checkbox"
          id="specialCharacter"
        />
        <label
          className='font-semibold'
          htmlFor="specialCharacter">Special character</label>
      </div>
    </div>
  );
}

export default InputArea;
