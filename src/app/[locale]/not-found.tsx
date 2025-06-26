import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="relative w-screen h-screen md:grid md:grid-cols-2">
      <div
        className="absolute left-0 top-0 bg-[url(/bg-pattern.png)] w-full h-full -z-20 opacity-[0.1]"
        style={{
          backgroundSize: "200px",
        }}
      ></div>
      <div className="absolute md:relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[300px] p-4 rounded-xl shadow-md bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Uppss..</h1>
        <p className="mt-2 text-center">
          Al parecer no hemos encontrado tu página
        </p>
        <p className="px-4 py-2 mt-4 rounded-xl bg-blueSport-500 hover:bg-blueSport-700 font-semibold text-white duration-200">
          Ir al inicio
        </p>
      </div>
      <Image
        src="/404.svg"
        alt="not found"
        className="-z-10 absolute top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 md:relative w-full max-h-screen object-contain m-auto"
        width={300}
        height={300}
      />
    </div>
  );
}
