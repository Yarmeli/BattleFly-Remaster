import HeroComponent from "@/components/home/hero";
import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <HeroComponent />

      {/* Content 1 */}
      <div
        className="hero bg-base-200 bg-right bg-blend-color-dodge md:bg-cover"
        style={{
          backgroundImage:
            "url(https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64084a0f3d9e52f89501f710_Welcome-Container.png)",
        }}
      >
        <div className="hero-content flex-col md:flex-row">
          <div className="p-5 text-start">
            <h1 className="text-3xl font-bold uppercase">
              Welcome to BattleFly
            </h1>
            <p className="py-6">
              Step into the exciting world of BattleFly Battlegrounds, the
              ultimate Web3 idle strategy game built on blockchain technology.
              Immerse yourself in a play-to-earn experience like no other where
              your in-game actions can earn you real-world value.
            </p>
            <p className="pb-6">
              In Season One the action takes place in two exciting arenas - the
              Proving Grounds and the Hyperdome. Engage in idle strategy
              gameplay, gather resources, optomize mod combinations and outwit
              your opponents to claim your share of the rewards.
            </p>
            <p> Enter the Hyperdome and join the action!</p>
            <Link href="/battlegrounds">
              <button className="btn-outline btn my-4 font-bold">
                Find out more
              </button>
            </Link>
          </div>
          <div className="hidden w-full md:flex"></div>
          <div className="hidden w-full md:flex"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
