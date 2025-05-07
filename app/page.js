import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {
  return (
    <main className="bg-slate-300">
      <section className="grid grid-cols-2 h-[50vh] ">
        <div className=" flex flex-col gap-4 justify-center items-center ">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortener for your business</p>
          <p className="px-44 text-center ">We are the most simple URL shortener in the world. Most of the url shorteners ask for your credentials for tracking you. We understand your needs that's why we created this URL shortener </p>
          <div className="flex space-x-4 text-white">
            <Link href="/shorten">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Now</button>
            </Link>
            <Link href="/github">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Github</button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-start relative  ">
        <Image className="mix-blend-darken" alt="vector image" src = {"/vector.png"} fill={true} />
        </div>

      </section>
    </main>
  );
}
