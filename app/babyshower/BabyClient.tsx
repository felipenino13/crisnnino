"use client";

import { useState } from "react";
import { Gift, MapPin, X } from "lucide-react";
import { Gluten } from "next/font/google";

const gluten = Gluten({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

type BabyClientProps = {
  name: string;
  regalo: string;
  etapa: string;
};

export default function BabyClient({
  name,
  regalo,
  etapa,
}: BabyClientProps) {
  const [openGiftModal, setOpenGiftModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <video
        src="/video/pollitoVideoDos.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="grid h-full content-between">
          <div>
            <div
              className={`${gluten.className} m-auto w-fit rounded-b-lg bg-[#0124C4]/50 p-4 text-white backdrop-blur-sm drop-shadow-lg`}
            >
              <p className="text-center text-4xl font-[700] tracking-tight text-[#FFF662]">
                16 MAY
              </p>
              <p className="text-center text-1xl">3:00 p.m. Funza</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-20">
                <img
                className="m-auto -mb-10 z-10 md:w-[400px] w-[300px]"
                src="/img/tituloBabyShower.png"
                alt="Título baby shower"
                />    
            </div>
            <div
              className={`${gluten.className} m-auto w-fit rounded-t-lg bg-[#C22B00]/50 p-4 text-white backdrop-blur-sm drop-shadow-lg z-0 text-center`}
            >
              <p className="text-center text-1xl">Hola</p>
              <p className="text-center text-4xl font-[700] tracking-tight text-[#FFF662]">
                {name}
              </p>
              <p className="text-center text-1xl">
                Te invito a celebrar este día especial con mis papitos
              </p>
              <button
                type="button"
                onClick={() =>
                    window.open(
                    "https://waze.com/ul?ll=4.7310472,-74.2218603&navigate=yes",
                    "_blank"
                    )
                }
                className={`${gluten.className} mb-3 rounded-xl bg-[#05C8F7] p-3 text-black w-fit`}>
                    Confirmar asistencia
                </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${gluten.className} absolute top-1/2 z-20 flex w-screen -translate-y-1/2 justify-between`}
      >
        <button
          type="button"
          onClick={() => setOpenGiftModal(true)}
          className="flex aspect-square items-center rounded-r-full bg-[#FFDF04] p-3 transition-transform duration-300 hover:scale-105"
        >
          <div>
            <Gift className="m-auto h-7 w-7 text-[#BA2800]/90" />
            <p className="m-auto font-[700] text-[#BA2800]/70 text-sm">Regalo</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setOpenMapModal(true)}
          className="flex aspect-square items-center rounded-l-full bg-[#FFDF04] p-3 transition-transform duration-300 hover:scale-105"
        >
          <div>
            <MapPin className="m-auto h-7 w-7 text-[#BA2800]/90" />
            <p className="m-auto font-[700] text-[#BA2800]/70 text-sm">Ubicación</p>
          </div>
        </button>
      </div>

      {openGiftModal && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 px-6">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpenGiftModal(false)}
              className="absolute top-4 right-4 rounded-full p-1 text-gray-600 transition hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            <h2
              className={`${gluten.className} mb-4 text-center text-2xl font-bold text-[#BA2800]`}
            >
              Regalo
            </h2>

            <p className={`${gluten.className} mb-4 text-[#000000] text-center leading-relaxed text-gray-700`}>
              Para nosotros es muy importante tu compañía más que un regalo,
              pero si quieres tener un detalle puedes traer pañales etapa{" "}
              <span className="font-semibold">{etapa}</span>, pañitos y{" "}
              <span className="font-semibold">{regalo}</span>.
            </p>
          </div>
        </div>
      )}

      {openMapModal && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 px-6">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpenMapModal(false)}
              className="absolute top-4 right-4 rounded-full p-1 text-gray-600 transition hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className={`${gluten.className} mb-4 text-center text-2xl font-bold text-[#BA2800]`}>
              ¿Cómo quieres llegar?
            </h2>
            <p className={`${gluten.className} mb-4 text-[#000000] text-center`}>
                Casa de retiros hermanas Franciscanas<br></br>
                Cra. 28b #13-12, Funza, Cundinamarca
            </p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=4.7310472,-74.2218603",
                  "_blank"
                )
              }
              className={`${gluten.className} mb-3 w-full rounded-xl bg-[#0119B9] p-3 text-white`}>
                Abrir en Google Maps
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://waze.com/ul?ll=4.7310472,-74.2218603&navigate=yes",
                  "_blank"
                )
              }
              className={`${gluten.className} mb-3 w-full rounded-xl bg-[#05C8F7] p-3 text-black`}>
                Abrir en Waze
            </button>
          </div>
        </div>
      )}
    </div>
  );
}