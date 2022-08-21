import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Elektrik from "../Assets/elektrik.png"
import Mekanik from "../Assets/mekanik.png"
import Program from "../Assets/program.png"
import Lainnya from "../Assets/lainnya.png"
import Materi from "../Components/Materi"
import Foto1 from "../Assets/Foto1.jpeg"
import database from '../firebaseinit';


function Learning() {
  const [datamateri, setDatamateri] = useState();
  useEffect(()=>{
    database.ref('materi/umum').once('value', function(snapshot) {
      let getdata = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let data = childSnapshot.val();
        getdata.push({ key: key, title: data.title, tutor: data.tutor, link: data.link, des: data.des, level:data.level, img: data.img}); 
      });
      setDatamateri(getdata);
    });
  },[])
  return (
    <div className='pt-16'>
      {/* Bagian Learning Path */}
      <div className="w-10/12 mx-auto">
        <p className="font-bold text-center text-3xl mt-16 text-blue-900">Siapakah Kamu?</p>
        <div className="flex flex-wrap justify-center">
            <Link to="/learning/elektrik" className="flex items-center mr-8 mt-6 px-8 py-3 bg-blue-100 rounded-lg md:w-4/12 w-11/12">
                <img src={Elektrik} className="w-20" />
                <div className="ml-6 flex-1 ">
                <p className=" font-semibold text-2xl">Divisi Elektrik</p>
                </div>
            </Link>
            <Link to="/learning/mekanik" className="flex items-center mr-8 mt-6 px-8 py-3 bg-blue-100 rounded-lg md:w-4/12 w-11/12">
                <img src={Mekanik} className="w-20" />
                <div className="ml-6 flex-1 ">
                <p className=" font-semibold text-2xl">Divisi Mekanik</p>
                </div>
            </Link>
            <Link to="/learning/programming" className="flex items-center mr-8 mt-6 px-8 py-3 bg-blue-100 rounded-lg md:w-4/12 w-11/12">
                <img src={Program} className="w-20" />
                <div className="ml-6 flex-1 ">
                <p className=" font-semibold text-2xl">Divisi Program</p>
                </div>
            </Link>
            <Link to="/learning/umum" className="flex items-center mr-8 mt-6 px-8 py-3 bg-blue-100 rounded-lg md:w-4/12 w-11/12">
                <img src={Lainnya} className="w-20" />
                <div className="ml-6 flex-1 ">
                <p className=" font-semibold text-2xl">Divisi Lainnya</p>
                </div>
            </Link>
        </div>

      </div>

      {/* Bagian Materi */}
      <div className="w-10/12 mx-auto ">
          <p className="font-bold text-center text-3xl mt-16 text-blue-900">Materi Sekolah Robot</p>
          <div className="flex flex-wrap justify-around">
              {datamateri? datamateri.map((materi)=>{
                return(
                  <Materi key={materi.key} title={materi.title} image={materi.img} des={materi.des} tutor={materi.tutor} level={materi.level} link={materi.link} />
                )
              }) : null}
          </div>
      </div>
  </div>
  )
}

export default Learning