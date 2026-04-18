"use client";

import { useState } from "react";
import { Gift, MapPin, X } from "lucide-react";
import { Gluten } from "next/font/google";
import Image from "next/image";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmAttendance = async () => {
  try {
    setIsSubmitting(true);

    const response = await fetch("/api/confirm-attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        etapa,
        regalo,
        source: "babyshower",
        confirmedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("No se pudo confirmar la asistencia");
    }

    setIsConfirmed(true);
  } catch (error) {
    console.error("Error al confirmar asistencia:", error);
    alert("Hubo un problema al confirmar tu asistencia.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <video
        src="/video/pollitoVideoDos.webm"
        poster="/img/poster-babyshower.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
              <p className="text-center text-xl">3:00 p.m. Funza</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-20">
                <Image
                className="m-auto md:-mb-6 -mb-3 z-10 md:w-[400px] w-[300px]"
                src="/img/tituloBabyShower.png"
                alt="Título baby shower"
                width={400}
                height={200}
                priority
                />
            </div>
            <div
              className={`${gluten.className} m-auto w-fit rounded-t-lg bg-[#C22B00]/50 p-4 text-white backdrop-blur-sm drop-shadow-lg z-0 text-center`}
            >
              <p className="text-center text-4xl font-[700] tracking-tight text-[#FFF662]">
                {name}
              </p>
              <p className="text-center text-xl">
                Acompañame a celebrar este día especial
              </p>
              {!isConfirmed ? (
                <button
                    type="button"
                    onClick={handleConfirmAttendance}
                    disabled={isSubmitting}
                    className={`${gluten.className} mt-3 mb-3 w-fit rounded-xl bg-[#05C8F7] p-3 text-black disabled:cursor-not-allowed disabled:opacity-50`}
                >
                    {isSubmitting ? "Confirmando..." : "Confirmar asistencia"}
                </button>
                ) : (
                <p className={`${gluten.className} mt-3 mb-3 text-center text-white`}>
                    Gracias por confirmar tu asistencia 💛
                </p>
                )}
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
              ¿Cómo llegar?
            </h2>
            <p className={`${gluten.className} mb-4 text-[#000000] text-center`}>
                Casa de retiros hermanas Franciscanas<br></br>
                Cra. 28b #13-12, Funza, Cundinamarca
            </p>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=4.7300259,-74.2239493", "_blank")
              }
              className={`${gluten.className} mb-3 w-full rounded-xl bg-[#0119B9] p-3 text-white`}>
                Abrir en Google Maps
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://waze.com/ul?ll=4.7300259,-74.2239493&navigate=yes", "_blank")
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