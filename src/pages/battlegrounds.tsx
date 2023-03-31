import HeroFullVideoComponent from "@/components/home/heroFullVideo";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <HeroFullVideoComponent
        videoURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63f48b817b5b9e1cdb1defee_battlegrounds1-transcode.mp4"
        title="Battlegrounds"
      />
    </>
  );
};

export default Home;
