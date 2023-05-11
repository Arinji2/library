import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
}
const AuthorCard = ({ name, image }: Props) => {
  return (
    <div className="group relative flex h-full w-[200px] flex-col items-center justify-end overflow-hidden rounded-lg md:w-[250px]">
      <Image
        src={image}
        alt="Image"
        fill
        quality={100}
        className="absolute object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute z-30 h-full w-full bg-[#2B2B2B] opacity-50"></div>
      <h2 className="z-40 mb-10 text-center font-lato text-[26px] font-bold text-white">
        {name}
      </h2>
    </div>
  );
};

const AuthorSection = () => {
  return (
    <div className="no-scrollbar z-20 mt-10 flex h-[400px] w-full items-center justify-start gap-10 overflow-x-auto bg-transparent md:justify-center">
      <div className="relative ml-4 flex h-full w-[250px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg md:w-[300px]">
        <Image
          src={"/sections/Agatha.png"}
          alt="Author Image"
          fill
          quality={100}
          className="absolute object-cover"
        />
        <div className="absolute z-30 h-full w-full bg-[#2B2B2B] opacity-50"></div>
        <h2 className="z-40 font-lato text-[40px] font-bold text-white">
          Authors
        </h2>
      </div>
      <div className="h-[80%] w-[5px] bg-white"></div>
      <div className="ml-0 flex h-full w-fit flex-row items-center justify-start gap-7">
        <AuthorCard
          name="William Shakespeare"
          image={"/sections/Shakespeare.png"}
        />
        <AuthorCard name="Hergé" image={"/sections/Herge.png"} />
        <AuthorCard name="JK Rowling" image={"/sections/Rowling.png"} />
      </div>
      <Link
        href="/authors"
        className="mr-4 flex h-full w-fit flex-col items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 hover:cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faChevronRight as IconProp}
          className="h-[30px] w-[30px] text-white"
        />
        <p className=" font-lato text-[20px] font-medium text-white">See All</p>
      </Link>
    </div>
  );
};

export default AuthorSection;
