import Image from "next/image";
import github from "../../assets/github-mark-white.png";
import linkedin from "../../assets/linkedin-white.png";
import x from "../../assets/logo-white.png";
import me from "../../assets/me.jpeg";
import coding from "../../assets/coding.jpg";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <div
        className="flex flex-col items-center  min-h-screen justify-around "
        id="top"
      >
        <div
          className="relative w-full max-x-xl 
    
    "
        >
          <div className="flex flex-col items-center ">
            <p className="text-6xl pb-10 md:text-8xl text-center font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.600),theme(colors.red.400),theme(colors.pink.500),theme(colors.orange.300),theme(colors.pink.500),theme(colors.red.400),theme(colors.red.600))] bg-[length:200%_auto] animate-gradient">
              Benjamin Warren
            </p>
            <p className="text-3xl md:text-4xl mt-20 text-center font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.600),theme(colors.red.400),theme(colors.pink.500),theme(colors.orange.300),theme(colors.pink.500),theme(colors.red.400),theme(colors.red.600))] bg-[length:200%_auto] animate-gradient">
              Full stack developer - Cape Town, ZA
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col min-h-screen justify-around pt-20 bg-[linear-gradient(to_top_right,theme(colors.orange.600),theme(colors.orange.500),theme(colors.red.600),theme(colors.red.500),theme(colors.red.600),theme(colors.pink.500),theme(colors.pink.600))] bg-[length:200%_auto] animate-gradientAngle"
        id="about"
      >
        <div className="md:px-10 sm:px-2 h-max ">
          <h1 className="text-5xl mt-20 font-bold text-white text-center ">
            About me{" "}
          </h1>
          <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col align-middle my-32 items-center">
            <Image src={me} alt="my image" className="rounded-md  w-72 h-72 " />
            <p className="text-2xl font-semibold tracking-wide leading-loose text-white md:px-20 sm:px-10 px-10 lg:mt-0 mt-20">
              I am a full stack developer with a background in physics and data
              science. I work at Skybound Capital where I build interesting
              financial tools. Before that, I used to do some research for the
              ATLAS experiment at CERN. I have a Masters Degree in Physics from
              the University of Cape Town and a Physics degree from The
              University of Chicago.
            </p>
          </div>
          <div className="flex flex-grow lg:flex-row flex-col mx-auto justify-around rounded-md w-3/4 items-center align-middle">
            <a href="https://github.com/bewarren" className="mx-20 my-7">
              <Image src={github} alt="github" width={70} height={70} />
            </a>
            <a
              href="https://www.linkedin.com/in/ben-warren-71008a65/"
              className="mx-20 py-2 my-7"
            >
              <Image src={linkedin} alt="linkedin" width={60} height={60} />
            </a>
            <a
              href="https://twitter.com/benwarren5020"
              className="mx-20 py-2 my-7"
            >
              <Image src={x} alt="x" width={50} height={50} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
