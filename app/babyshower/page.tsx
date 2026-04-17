export default function Baby() {
  return (
  <>
    <div className="grid grid-flow-col grid-rows-3 gap-4 flex justify-center bg-[#FFFFFF] h-dvh">
        <div className="row-span-3">
            <h1 className="text-[#000000]">hola bebe</h1>
            <video 
                src="/video/pollitoVideo.mp4"
                controls
                autoPlay
                muted
                loop
                className="h-full w-auto"
            ></video>
        </div>
    </div>
</>
  );
}