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
                <div className="m-auto bg-white/30 backdrop-blur-sm w-fit p-4 text-[#3B3035] rounded-b-lg">
                    <p className="text-center text-5xl font-black tracking-tight">16 MAY</p>
                    <p className="text-center text-1xl">3:00 p.m.</p>
                </div>
            </div>
            <div>
                <img src="/img/tituloBabyShower.png" alt="" width={"600px"} />
            </div>
        </div>
        
      </div>

    </div>
</>
  );
}