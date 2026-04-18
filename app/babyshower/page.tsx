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
      <div className="relative z-10 flex items-center justify-center items-end h-full">
        <h1 className="text-white text-4xl font-bold">
          <img src="/img/tituloBabyShower.png" alt="" width={"600px"} />
        </h1>
      </div>

    </div>
</>
  );
}