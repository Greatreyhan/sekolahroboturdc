import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Materi from "../Components/Materi";
import Foto1 from "../Assets/Foto1.jpeg";
import database from "../firebaseinit";
import ProgramPict from "../Assets/program1.jpg";
import MekanikPict from "../Assets/mekanik1.jpg";
import ElektrikPict from "../Assets/elektrik1.jpg";

function Major() {
  let params = useParams();
  const [datamateri, setDatamateri] = useState();
  useEffect(() => {
    database.ref("materi/" + params.major).once("value", function (snapshot) {
      let getdata = [];
      snapshot.forEach((childSnapshot) => {
        let key = childSnapshot.key;
        let data = childSnapshot.val();
        getdata.push({
          key: key,
          title: data.title,
          tutor: data.tutor,
          link: data.link,
          des: data.des,
          level: data.level,
          img: data.img
        });
      });
      setDatamateri(getdata);
    });
  }, []);
  return (
    <div>
      {/* Bagian Materi */}
      <div
        className="py-16 h-52"
        style={{
          backgroundImage: `url(${
            params.major == "programming"
              ? ProgramPict
              : params.major == "elektrik"
              ? ElektrikPict
              : MekanikPict
          })`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <p
          style={{ textShadow: "2px 2px 0 rgba(255,255,255,.6)" }}
          className="text-5xl font-black text-white text-center tracking-wide pt-8"
        >
          MATERI DIVISI <span className="text-blue-800 uppercase">{params.major}</span> 
        </p>
      </div>
      <div className="w-10/12 mx-auto ">
        <div className="flex flex-wrap justify-around">
          {datamateri
            ? datamateri.map((materi) => {
                return (
                  <Materi
                    key={materi.key}
                    title={materi.title}
                    image={materi.img}
                    des={materi.des}
                    tutor={materi.tutor}
                    level={materi.level}
                    link={materi.link}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Major;
