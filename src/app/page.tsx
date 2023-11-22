import Image from "next/image";
import github from "../../assets/github-mark.png";
import linkedin from "../../assets/LI-In-Bug.png";
import x from "../../assets/logo-black.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-36 py-10 h-14">
      <p className="text-xl mt-8 tracking-wide leading-loose">
        My name is Benjamin Warren. I am a 27 year old software developer based
        in Cape Town, South Africa. I have worked as a full-stack developer at
        Skybound Capital since 2021 building internal tools for analysts and
        directors. Prior to this, I completed a Masters Degree in Physics at the
        University of Cape Town where I did research for the ATLAS experiment. I
        also have a Physics degree from The University of Chicago.
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
    </main>
  );
}
