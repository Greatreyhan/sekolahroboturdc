import React from 'react'

function Resources() {
  return (
    <div className='pt-16'>
      {/* Link To Drive */}
      <p className='text-center font-bold text-4xl text-blue-900 mt-16'>Link Penting</p>
      <div className='w-10/12 mx-auto flex justify-center mt-16 mb-48'>
      <a href="https://drive.google.com/drive/folders/1vl-3wqH0f2pjSrR144O5PKz6mHSXomUz?usp=sharing" className='px-6 py-1 bg-blue-800 text-xl m-2 text-white font-semibold hover:bg-blue-900 rounded-lg'>Pengumpulan Tugas</a>
      <a href="#" className='px-6 py-1 bg-blue-800 text-xl m-2 text-white font-semibold hover:bg-blue-900 rounded-lg'>Program Github</a>
      </div>

    </div>
  )
}

export default Resources