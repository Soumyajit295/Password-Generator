import React from 'react';

function Container({children}) {
  return (
    <div className='w-full md:w-3/4 lg:w-1/2 bg-slate-700 text-white mx-auto mt-7 p-5 rounded-lg'>
        {children}
    </div>
  );
}

export default Container;
