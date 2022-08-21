import React from 'react'

function Materi({title,image,des,tutor, level, link}) {
  return (
        <div className="flex md:w-5/12 w-11/12 bg-white shadow-lg rounded-lg overflow-hidden mt-8">
            <div className="w-1/3 bg-cover bg-landscape">
                <img src={image} className="object-cover w-full h-full" />
            </div>
            <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold md:text-2xl text-xl">
                    {title}
                </h1>
                <p className="text-gray-800 text-md">
                    {tutor}
                </p>
                <div className="flex md:flex-row flex-col item-center justify-between mt-3">
                    <p className="text-blue-700 font-semibold text-md">
                    {level}
                    </p>
                    <a href={link} target='_blank' className="px-3 py-2 text-center mt-4 md:mt-0 bg-blue-800 text-white text-xs font-bold uppercase rounded">
                        Mulai Sekarang
                    </a>
                </div>
            </div>
        </div>

  )
}

export default Materi