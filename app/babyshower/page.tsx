"use client";

import { useState } from "react";
import { Gift, MapPin, X } from "lucide-react";
import { Gluten } from 'next/font/google'

const gluten = Gluten({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // ajusta según necesites
})

export default function Baby() {
   const [openGiftModal, setOpenGiftModal] = useState(false);
   const [openLocationModal, setOpenLocationModal] = useState(false);
  return (
  <>
    <div className="relative h-dvh w-full overflow-hidden">
      
      {/* 🎥 Video de fondo */}
      <video
        src="/video/pollitoVideoDos.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 🧱 Capa opcional (overlay oscuro o blur) */}
      <div className="absolute inset-0"></div>

      {/* ✨ Contenido encima */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="content-between grid h-full">
            <div>
                <div className={`${gluten.className} m-auto bg-[#0124C4]/50 backdrop-blur-sm w-fit p-4 text-[#FFFFFF] rounded-b-lg drop-shadow-lg`}>
                    <p className="text-center text-[#FFF662] text-5xl font-[700] tracking-tight">16 MAY</p>
                    <p className="text-center text-2xl">3:00 p.m. Funza</p>
                </div>
            </div>
            <div>
                <img className='m-auto' src="/img/tituloBabyShower.png" alt="" width={"500px"} />
                <div className={`${gluten.className} m-auto bg-[#C22B00]/50 backdrop-blur-sm w-fit p-4 text-[#FFFFFF] rounded-t-lg drop-shadow-lg`}>
                    <p className="text-center text-2xl">Hola</p>
                    <p className="text-center text-[#FFF662] text-5xl font-[700] tracking-tight">Wendy y Cami</p>
                    <p className="text-center text-2xl">Te invito a celerbrar este día especial con mis papitos</p>
                </div>
            </div>
        </div>
      </div>

       {/* 🎁 Botones laterales */}
      <div className={`${gluten.className} absolute z-20 top-100 w-screen justify-between flex`}>
        <button
            type="button"
            onClick={() => setOpenGiftModal(true)}
            className="flex aspect-square items-center rounded-r-full bg-[#FFDF04] p-4 transition-transform duration-300 hover:scale-105"
          >
            <div>
              <Gift className="m-auto h-10 w-10 text-[#BA2800]/90" />
              <p className="m-auto font-[700] text-[#BA2800]/70">Regalo</p>
            </div>
        </button>

        <button
            type="button"
            onClick={() => setOpenLocationModal(true)}
            className="flex aspect-square items-center rounded-l-full bg-[#FFDF04] p-4 transition-transform duration-300 hover:scale-105"
          >
            <div>
            <MapPin className="text-[#BA2800]/90 w-10 h-10 m-auto"/>
            <p className="font-[700] m-auto text-[#BA2800]/70">Ubicación</p>
          </div>
        </button>
      </div>

      {openGiftModal && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 px-6">
            <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
              <button
                type="button"
                onClick={() => setOpenGiftModal(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-600 transition hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className={`${gluten.className} mb-4 text-center text-2xl font-bold text-[#0119B9]`}>
                Regalito
              </h2>

              <p className={`${gluten.className} text-center leading-relaxed text-gray-700`}>
                Para nosotros es muy importante tu compañía más que un regalo,
                pero si quieres tener un detalle puedes traer pañales Winny
                etapa <span className="font-semibold">$etapa</span>, pañitos y{" "}
                <span className="font-semibold">$regalo</span>.
              </p>
            </div>
          </div>
        )}

        {openLocationModal && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 px-6">
            <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
              <button
                type="button"
                onClick={() => setOpenLocationModal(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-600 transition hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className={`${gluten.className} mb-4 text-center text-2xl font-bold text-[#0119B9]`}>
                Ubicación
              </h2>

              <p className={`${gluten.className} text-center leading-relaxed text-gray-700`}>
                Casa de retiros hermanas Franciscanas
              </p>
              <p className={`${gluten.className} text-center leading-relaxed text-gray-700`}>
                Cra. 28b #13-12, Funza, Cundinamarca
              </p>
            </div>
          </div>
        )}

    </div>
</>
  );
}