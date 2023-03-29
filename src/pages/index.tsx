import HeroComponent from "@/components/home/hero";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <HeroComponent />

      {/* TODO: Refactor these contents into a component that can be reused */}

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

      {/* Content 2 */}

      <div
        className="hero bg-base-300 bg-left bg-blend-color-dodge"
        style={{
          backgroundImage:
            "url(https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64084a7b43fefc233a10a0e5_Image-p-800.png)",
          transform: "scale(1) skew(0deg,-2deg)",
        }}
      >
        <div
          className="hero-content flex-col md:flex-row-reverse"
          // undo transformation
          style={{ transform: "scale(1) skew(0deg,2deg)" }}
        >
          <div className="p-5 text-start">
            <h1 className="text-3xl font-bold uppercase">
              The BattleFly - A beautiful Assassin
            </h1>
            <p className="py-6">
              Each BattleFly is a one-of-a-kind blend of brutal power and
              stunning beauty with the potential to deliver a positive return on
              investment.
            </p>
            <p className="pb-6">
              A BattleFly&apos;s value is determined by many factors and not
              rarity alone. Utilizing quality mods with strong synergy is key,
              making both common and uncommon models capable of dominating the
              game.
            </p>
            <p> Enter the Hyperdome and join the action!</p>
            <Link
              href="https://trove.treasure.lol/collection/battlefly"
              target="_blank"
            >
              <button className="btn-outline btn my-4 font-bold">
                Buy a BattleFly
              </button>
            </Link>
          </div>
          <div className="hidden w-full md:flex"></div>
          <div className="hidden w-full md:flex"></div>
        </div>
      </div>

      {/* Content 3 */}

      <div
        className="hero bg-base-100 bg-left bg-blend-color-dodge md:bg-cover md:bg-blend-lighten"
        style={{
          backgroundImage:
            "url(https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64084acb19bdd63e06c2e122_Tex-R-Image-Full-Width.png)",
          transform: "scaleX(-1)",
        }}
      >
        <div
          className="hero-content flex-col md:flex-row"
          // undo transformation
          style={{ transform: "scaleX(-1)" }}
        >
          <div className="p-5 text-start">
            <h1 className="text-3xl font-bold uppercase">Play to Earn</h1>
            <p className="py-6">
              Ready to join the action? Here&apos;s how you can play and win in
              BattleFly Battlegrounds.
            </p>
            <p className="pb-6">
              Our matchmaking system will pit you against other BattleFlys in
              intense PVP battles. Before each battle, both players will stake a
              small amount of the in-game currency, MAGIC, on the outcome. If
              you come out on top, you&apos;ll receive your opponent&apos;s
              staked MAGIC. Players with a win % greater than 53% will steadily
              grow their earnings as they will accumulate more Magic than they
              lose.
            </p>
            <p className="pb-6">
              However, be mindful of your strategy and the strategy of others -
              playing without a solid plan or with a poorly equipped BattleFly
              will result in a gradual loss of your staked MAGIC over time.
            </p>
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

      {/* Content 4 */}

      <div className="hero bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <Image
            width={500}
            height={300}
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64084ae21004c565272df205_Image-p-500.png"
            alt="Image of $Magic token and GFLY token"
            className="h-full w-full animate-pulse rounded-3xl shadow-xl shadow-primary"
          />

          <div className="hidden w-full lg:flex"></div>
          <div className="p-5 text-start">
            <h1 className="text-3xl font-bold uppercase">
              Secured by GFLY and powered by MAGIC
            </h1>
            <p className="py-6">
              BattleFly is powered by $Magic, a currency purpose built to enable
              econimic and narrative based connection and compatability across a
              variety of games and metaverses. Through a shared token and
              resources, each game within the Treasure Dao ecosystem strengthens
              and supports one another.
            </p>
            <p className="pb-6">
              gFLY is a governance token that runs the BattleFly network,
              including Games, Treasury and Flywheel Staking. To make the
              network go, gFLY holders are rewarded for staking and providing
              security to the network.
            </p>
            <p className="pb-6">
              You can buy $MAGIC on SushiSwap and GLFY on MagicSwap
            </p>
            <div className="flex flex-row gap-3">
              <Link href="https://app.sushi.com/en/swap" target="_blank">
                <button className="btn-outline btn font-bold">Buy Magic</button>
              </Link>
              <Link
                href="https://magicswap.lol/?input=MAGIC&output=GFLY"
                target="_blank"
              >
                <button className="btn-outline btn font-bold">Buy GFLY</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
