import React,{useEffect, useState} from "react";
import Kelas from "../Components/Kelas";
import Foto1 from "../Assets/Foto1.jpeg"
import database from '../firebaseinit';

function Schedule() {
    const [datakelas, setDataKelas] = useState()
    useEffect(()=>{
        database.ref('kelas').once('value', function(snapshot) {
          let getdata = [];
          snapshot.forEach((childSnapshot) => {
            let key = childSnapshot.key;
            let data = childSnapshot.val();
            getdata.push({ key: key, title: data.title, tutor: data.tutor, level: data.level, divisi:data.divisi, date:data.date, img:data.img}); 
          });
          console.log(getdata)
          setDataKelas(getdata);
        });
      },[])
  return (
    <div className='pt-16'>
    {/* Bagian Learning Schedule */}
      <div className="w-10/12 mx-auto ">
        <p className="font-bold text-left text-3xl mt-16 text-blue-900">Jadwal Sekolah Robotik</p>
        <div className="flex flex-wrap justify-around">
        {datakelas? datakelas.map((kelas)=>{
                return(
                  <Kelas key={kelas.key} title={kelas.title} image={kelas.img} div={kelas.divisi} tutor={kelas.tutor} level={kelas.level} date={kelas.date} />
                )
              }) : null}
        </div>

      </div>
    </div>
  )
}

export default Schedule