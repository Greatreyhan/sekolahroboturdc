import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Foto1 from "../Assets/Foto1.jpeg"
import Elektrik from "../Assets/elektrik.png"
import Mekanik from "../Assets/mekanik.png"
import Program from "../Assets/program.png"
import Lainnya from "../Assets/lainnya.png"
import Kelas from "../Components/Kelas";
import Materi from "../Components/Materi"
import database from '../firebaseinit';

function Landing() {
  const [timeleft, setTimeLeft] = useState()
  const [datamateri, setDatamateri] = useState();
  const [datakelas, setDataKelas] = useState()
  useEffect(()=>{
    database.ref('materi/umum').once('value', function(snapshot) {
      let getdata = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let data = childSnapshot.val();
        getdata.push({ key: key, title: data.title, tutor: data.tutor, des: data.des, level:data.level, img: data.img}); 
      });
      setDatamateri(getdata);
    });
  },[])
  useEffect(()=>{
    database.ref('kelas').once('value', function(snapshot) {
      let getdata = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let data = childSnapshot.val();
        getdata.push({ key: key, title: data.title, tutor: data.tutor, level: data.level, divisi:data.divisi, date:data.date, img:data.img}); 
      });
      let landingdata = getdata.slice(0,4)
      setDataKelas(landingdata);
    });
  },[])
  const calculateTimeLeft = ()=>{
    let timeleft = {}
    let dday = new Date('05-16-2023')
    let now = new Date()
    timeleft = {
    days : Math.floor((dday-now)/(1000 * 60 * 60 * 24)),
    hours : Math.floor(((dday-now) / (1000 * 60 * 60)) % 24),
    minutes : Math.floor(((dday-now) / 1000 / 60) % 60),
    seconds : Math.floor(((dday-now) / 1000) % 60),
    }
    return timeleft;
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setTimeLeft(calculateTimeLeft())
    },1000)
  return () => clearTimeout(timer)
  });
  return (
    <div>
      {/* Header Small */}
      <div
        style={{
          backgroundImage: `url(${Foto1})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: 'cover'
        }}
      >
        <div className="container pt-36 pb-36 s:w-screen w-4/5 mx-auto flex justify-center">
          <div className="flex-1 ">
            <h1
              style={{ textShadow: "2px 2px 0 rgba(255,255,255,.6)" }}
              className="md:text-5xl text-4xl font-black text-white tracking-wide md:w-5/12 w-full" 
            >
              <span className="text-blue-800">SEKOLAH ROBOT</span> UNDIP ROBOTIC DEVELOPMENT CENTER
            </h1>
            <p
              style={{ textShadow: "1.5px 1.5px 0 rgba(10,10,10,.5)" }}
              className="text-xl mt-8 text-white tracking-wide md:w-5/12 w-full"
            >
              Mari Bergabung Bersama Kami Untuk Belajar Bersama dan Meraih Kemenangan
            </p>
            <div className="mt-11">
              <Link
                style={{ boxShadow: "3px 3px 0 rgba(255,255,255,.5)" }}
                className="bg-white font-semibold px-8 py-2 text-xl text-white bg-blue-800 hover:bg-blue-900"
                to="/learning"
              >
                Mulai Berlatih
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Timer */}
      <p className="text-center text-3xl mt-16 font-extrabold text-blue-800">Time to Go</p>

      {timeleft ? (
        <div className="md:w-5/12 w-11/12 mx-auto flex md:justify-around justify-center mt-8">
        <div className="flex md:w-32 w-24 m-1 flex-col bg-blue-800 p-2 rounded-lg justify-center items-center">
          <p className="md:text-4xl text-3xl font-extrabold text-gray-100" >{timeleft.days}</p>
          <p className="md:text-2xl text-xl text-gray-200 font-normal">Days</p>
        </div>
        <div className="flex md:w-32 w-24 m-1 flex-col bg-blue-800 p-2 rounded-lg justify-center items-center">
        <p className="md:text-4xl text-3xl font-extrabold text-gray-100" >{timeleft.hours}</p>
          <p className="md:text-2xl text-xl text-gray-200 font-normal">Hours</p>
        </div>
        <div className="flex md:w-32 w-24 m-1 flex-col bg-blue-800 p-2 rounded-lg justify-center items-center">
        <p className="md:text-4xl text-3xl font-extrabold text-gray-100" >{timeleft.minutes}</p>
          <p className="md:text-2xl text-xl text-gray-200 font-normal">Minutes</p>
        </div>
        <div className="flex md:w-32 w-24 m-1 flex-col bg-blue-800 p-2 rounded-lg justify-center items-center">
        <p className="md:text-4xl text-3xl font-extrabold text-gray-100" >{timeleft.seconds}</p>
          <p className="md:text-2xl text-xl text-gray-200 font-normal">Seconds</p>
        </div>  
      </div>
      ): null}
      

      {/* Bagian Learning Path */}
      <div className="w-10/12 mx-auto">
        <p className="font-bold text-left text-3xl mt-16 text-blue-900">Siapakah Kamu?</p>
        <div className="flex flex-wrap">
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

    {/* Bagian Materi */}
    <div className="w-10/12 mx-auto ">
        <p className="font-bold text-left text-3xl mt-16 text-blue-900">Materi Sekolah Robot</p>
        <div className="flex flex-wrap justify-around">
              {datamateri? datamateri.map((materi)=>{
                return(
                  <Materi key={materi.key} title={materi.title} image={materi.img} des={materi.des} tutor={materi.tutor} level={materi.level} link={materi.link} />
                )
              }) : null}
        </div>
    </div>
      
      {/* Bagian Resource */}
    </div>
  );
}

export default Landing;
