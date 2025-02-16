import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-white border-b-2 w-fit">
          About me
        </h2>
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 p-10 md:p-20 items-center">
        <div className="flex justify-center">
          <Image
            src={"/images.jpg"}
            alt="about"
            width={300}
            height={300}
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full"
          />
        </div>
        <div>
          <p className="text-[16px] md:text-[18px] text-center md:text-left">
            I&#39;m Kashaf, a creative Web Developer & Graphics Designer skilled in
            Next.js, React, and Tailwind CSS. I specialize in crafting dynamic
            and visually engaging websites, blending design with functionality.
            Currently exploring Python to level up my development skills. Let&#39;s
            collaborate and build something awesome
          </p>
        </div>
      </div>
    </>
  );
}
