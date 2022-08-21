import React from 'react'
import Foto1 from '../Assets/Foto1.jpeg'

function Kelas({title,image,div,tutor,level, date}) {
  const dateH = new Date(date);
  const mon = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  return (
    <div class="flex flex-col w-48 mt-8 bg-blue-100 rounded-lg">
        <div
        className='h-32 rounded-t-lg flex flex-col justify-center items-center'
         style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: 'cover'
          }}
        >
        <p className='text-4xl font-bold text-gray-100 opacity-90'>{dateH.getDate()}</p>
        <p className='text-2xl font-bold text-gray-100 opacity-90'>{mon[dateH.getMonth()]}</p>
        </div>
        <div className='px-2 py-1'>
            <p className='text-lg font-bold'>{title}</p>
            <p className='font-semibold text-blue-800 text-md'>{tutor}</p>
            <p className='pt-4 text-blue-800 text-center text-sm'>Divisi {div}</p>
        </div>
    </div>

  )
}

export default Kelas