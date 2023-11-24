import Image from "next/image";
import github from "../../assets/github-mark-white.png";
import linkedin from "../../assets/linkedin-white.png";
import x from "../../assets/logo-white.png";
import me from "../../assets/me.jpeg";
import coding from "../../assets/coding.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center pt-20   min-h-screen justify-around">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl mt-6">Software Developer</h2>
          <h4 className="text-2xl text-center leading-normal mt-16">
            I love building end-to-end applications, messing around with data,
            and talking about physics.
          </h4>
        </div>

        <Image src={coding} alt="code" className="w-1/2 mt-20" />
      </div>
      <div
        className="flex flex-col min-h-screen justify-around bg-sky-950 pt-20"
        id="about"
      >
        <div className="px-10 h-max  ">
          <h1 className="text-4xl text-white text-center ">About me </h1>
          <div className="flex flex-row  align-middle my-32 items-center">
            <Image src={me} alt="my image" className="rounded-md  w-72 h-72 " />
            <p className="text-2xl tracking-wide leading-loose text-white px-20">
              Hi, I'm Ben. I am a Cape Town-based full-stack developer, with a
              physics and data science background. I have worked as a full-stack
              developer at Skybound Capital since 2021, building internal tools
              for analysts and directors. Prior to this, I completed a Masters
              Degree in Physics at the University of Cape Town where I did
              research for the ATLAS experiment. I also have a Physics degree
              from The University of Chicago.
            </p>
          </div>
          <div className="flex flex-row mx-auto justify-around rounded-md w-3/4 items-center align-middle">
            <a href="https://github.com/bewarren" className="mx-20 ">
              <Image src={github} alt="github" width={70} height={70} />
            </a>
            <a
              href="https://www.linkedin.com/in/ben-warren-71008a65/"
              className="mx-20 py-2"
            >
              <Image src={linkedin} alt="linkedin" width={60} height={60} />
            </a>
            <a href="https://twitter.com/benwarren5020" className="mx-20 py-2">
              <Image src={x} alt="x" width={50} height={50} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
