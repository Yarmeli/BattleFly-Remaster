import HeroComponent from "@/components/home/hero";
import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <HeroComponent />
      <div className="w-full bg-base-100">
        <div className="flex flex-row items-center justify-center gap-5 p-5 text-center">
          <h1 className="text-xl">Ready to meet the community?</h1>
          <button className="btn-outline btn font-bold">Join Discord</button>
        </div>
      </div>
    </>
  );
};

export default Home;
