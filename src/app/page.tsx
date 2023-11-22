import Image from "next/image";
import github from "../../assets/github-mark.png";
import linkedin from "../../assets/LI-In-Bug.png";
import x from "../../assets/logo-black.png";
import me from "../../assets/me.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-36 py-10 h-14">
      <div className="flex flex-col items-center justify-around mt-32 mb-36">
        <h2 className="text-4xl mt-10">Software Developer</h2>
        <h4 className="text-xl text-center leading-normal mt-10">
          I love building end-to-end applications, messing around with data, and
          talking about physics.
        </h4>
        <Image
          src={me}
          alt="x"
          width={200}
          height={160}
          className="mt-10 rounded-full mx-auto w-60 h-60"
        />
      </div>
      <div className="flex flex-col items-center justify-around mt-32 mb-36">
        <p className="text-xl mt-8 tracking-wide leading-loose">
          Hi, I'm Ben Warren. I am a Cape Town-based developer. I have worked as
          a full-stack developer at Skybound Capital since 2021 building
          internal tools for analysts and directors. Prior to this, I completed
          a Masters Degree in Physics at the University of Cape Town where I did
          research for the ATLAS experiment. I also have a Physics degree from
          The University of Chicago.
        </p>
        <div className="w-full flex flex-row mt-12 justify-center py-20">
          <a href="https://github.com/bewarren" className="px-20">
            <Image src={github} alt="github" width={90} height={90} />
          </a>
          <a
            href="https://www.linkedin.com/in/ben-warren-71008a65/"
            className="px-20 py-2"
          >
            <Image src={linkedin} alt="linkedin" width={90} height={90} />
          </a>
          <a href="https://twitter.com/benwarren5020" className="px-20 py-2">
            <Image src={x} alt="x" width={70} height={70} />
          </a>
        </div>
      </div>
    </main>
  );
}
