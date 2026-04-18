import { Gift, MapPin } from "lucide-react"
import { Gluten } from 'next/font/google'

const gluten = Gluten({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // ajusta según necesites
})

export default function Baby() {
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
                    <p className="text-center text-2xl">3:00 p.m.</p>
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

      <div className={`${gluten.className} absolute z-20 top-100 w-screen justify-between flex`}>
        <div className='bg-[#FFDF04] p-4 aspect-square rounded-r-[500] items-center flex'>
          <div>
            <Gift className="text-[#BA2800]/90 w-10 h-10 m-auto"/>
            <p className="font-[700] m-auto text-[#BA2800]/70">Regalo</p>
          </div>
        </div>
        <div className='bg-[#FFDF04] p-4 aspect-square rounded-l-[500] items-center flex'>
          <div>
            <MapPin className="text-[#BA2800]/90 w-10 h-10 m-auto"/>
            <p className="font-[700] m-auto text-[#BA2800]/70">Ubicación</p>
          </div>
        </div>
      </div>

    </div>
</>
  );
}