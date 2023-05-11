import Image from "next/image";
import AuthorSection from "./(sections)/authorSection";
import BookSection from "./(sections)/bookSection";
import GenreSection from "./(sections)/genreSection";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="relative flex h-[100svh] w-full flex-col items-center justify-center gap-20">
        <Image
          src={"/hero.png"}
          alt="Hero Image"
          fill
          className="absolute object-cover"
          priority
          quality={100}
        />
        <div className="absolute z-10 h-full w-full bg-[#2B2B2B] opacity-70"></div>
        <h1 className="z-20 font-lato text-[55px] font-bold text-[#E8772E] md:text-[120px]">
          TL3 LIBRARY
        </h1>
        <p className="z-20 font-lato text-[15px] font-bold text-[#C9C7C7] md:text-[30px]">
          A Reality of Imaginations
        </p>
      </div>
      <div className="relative z-[500] flex h-fit w-full flex-col items-center justify-start bg-black">
        <div className="sticky top-0  h-[100vh] w-full">
          <Image
            src={"/sections.jpeg"}
            alt="Sections Image"
            fill
            quality={100}
            className=" h-[100svh] object-cover"
          />
          <div className="absolute z-10 h-full w-full bg-[#2B2B2B] opacity-50"></div>
        </div>
        <h1 className="z-20 -mt-[90svh] text-center font-lato text-[50px] font-bold text-white md:text-[70px]">
          Your Journey Awaits
        </h1>
        <div className="z-20 flex h-full w-full flex-col items-center justify-center gap-20">
          <AuthorSection />
          <BookSection />
          <GenreSection />
        </div>
        <div className="flex h-[100svh] w-full flex-col items-center justify-center gap-20 text-center">
          <h3 className=" z-40 font-lato text-[50px] font-bold text-white md:text-[80px]">
            What Are You Waiting For?
          </h3>
          <h4 className=" z-40 bg-[#E8772E] p-4 font-lato text-[25px] font-bold text-white md:text-[40px]">
            Opening at Tower 3 Soon!!
          </h4>
        </div>
      </div>
    </div>
  );
}
