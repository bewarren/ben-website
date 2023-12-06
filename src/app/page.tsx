import Image from "next/image";
import github from "../../assets/github-mark-white.png";
import linkedin from "../../assets/linkedin-white.png";
import x from "../../assets/logo-white.png";
import me from "../../assets/me.jpeg";
import coding from "../../assets/coding.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center  min-h-screen justify-around ">
        <div className="relative w-full max-x-xl">
          <div className="absolute top-0 left-62 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
          <div className="absolute top-0 right-20 md:w-96 md:h-96 sm:w-0 sm:h-0 bg-blue-400 rounded-full mix-blend-multiply blur-xl opacity-80 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-4 left-30 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply blur-xl opacity-80 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-4 right-20 md:w-96 md:h-96 sm:w-0 sm:h-0 bg-green-300 rounded-full mix-blend-multiply blur-xl opacity-80 animate-blob animation-delay-4000"></div>
          <div className="flex flex-col items-center -mt-20">
            <h2 className="text-6xl text-center font-semibold">Hi, I'm Ben</h2>
            <h4 className="text-4xl text-center leading-normal mt-16 mx-10 font-medium">
              I am a full stack developer based in Cape Town.
            </h4>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col min-h-screen justify-around bg-red-800 pt-20"
        id="about"
      >
        <div className="md:px-10 sm:px-2 h-max ">
          <h1 className="text-4xl text-white text-center ">About me </h1>
          <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col align-middle my-32 items-center">
            <Image src={me} alt="my image" className="rounded-md  w-72 h-72 " />
            <p className="md:text-2xl sm:text-xl tracking-wide leading-loose text-white px-20 lg:mt-0 mt-20">
              Hi, I'm Ben. I am a Cape Town-based full-stack developer, with a
              physics and data science background. I have worked as a full-stack
              developer at Skybound Capital since 2021, building internal tools
              for analysts and directors. Prior to this, I completed a Masters
              Degree in Physics at the University of Cape Town where I did
              research for the ATLAS experiment. I also have a Physics degree
              from The University of Chicago.
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
