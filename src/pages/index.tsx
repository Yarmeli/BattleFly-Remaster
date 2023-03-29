import HeroVideoComponent from "@/components/home/heroVideo";
import HeroImageComponent from "@/components/home/heroImage";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <HeroVideoComponent
        videoURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63ef16aa854a6348aa36dfdc_BattleflyVideo-transcode.mp4"
        title="Battlegrounds"
        description={
          "A Play to Earn Web3 strategy game\r\n" + "Ready for a challenge?"
        }
      />

      {/* Content 1 */}
      <HeroImageComponent
        imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64084a0f3d9e52f89501f710_Welcome-Container.png"
        title="Welcome to BattleFly"
        description={`
        Step into the exciting world of BattleFly Battlegrounds, the ultimate Web3 idle strategy game built on blockchain technology.
        Immerse yourself in a play-to-earn experience like no other where your in-game actions can earn you real-world value.\r\n

        In Season One the action takes place in two exciting arenas - the Proving Grounds and the Hyperdome. Engage in idle strategy
        gameplay, gather resources, optomize mod combinations and outwit your opponents to claim your share of the rewards.\r\n

        Enter the Hyperdome and join the action!
      `}
        btnLink="/battlegrounds"
        btnText="Find out more"
      />

      {/* Content 2 */}

      <HeroImageComponent
        imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64084a7b43fefc233a10a0e5_Image-p-800.png"
        title="The BattleFly - A beautiful Assassin"
        description={`
        Each BattleFly is a one-of-a-kind blend of brutal power and stunning beauty with the potential to deliver a positive return on
        investment.\r\n

        A BattleFly's value is determined by many factors and not rarity alone. Utilizing quality mods with strong synergy is key,
        making both common and uncommon models capable of dominating the game.\r\n

        Enter the Hyperdome and join the action!
      `}
        btnLink="https://trove.treasure.lol/collection/battlefly"
        btnTarget="_blank"
        btnText="Buy a BattleFly"
        reverse={true}
      />

      {/* Content 3 */}

      <HeroImageComponent
        divCustomClasses="bg-base-100 md:bg-blend-lighten"
        imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64084acb19bdd63e06c2e122_Tex-R-Image-Full-Width.png"
        imageTransform="scaleX(-1)"
        title="Play to Earn"
        description={`
        Ready to join the action? Here's how you can play and win in BattleFly Battlegrounds.\r\n

        Our matchmaking system will pit you against other BattleFlys in intense PVP battles. Before each battle, both players will stake a
        small amount of the in-game currency, MAGIC, on the outcome. If you come out on top, you'll receive your opponent's
        staked MAGIC. Players with a win % greater than 53% will steadily grow their earnings as they will accumulate more Magic than they
        lose.\r\n

        However, be mindful of your strategy and the strategy of others - playing without a solid plan or with a poorly equipped BattleFly
        will result in a gradual loss of your staked MAGIC over time.
      `}
        btnLink="/battlegrounds"
        btnText="Find out more"
      />

      {/* Content 4 */}

      <div className="hero bg-base-200 pb-5">
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
                <button className="btn-outline btn -skew-x-12 font-bold">
                  <p className="skew-x-12">Buy Magic</p>
                </button>
              </Link>
              <Link
                href="https://magicswap.lol/?input=MAGIC&output=GFLY"
                target="_blank"
              >
                <button className="btn-outline btn -skew-x-12 font-bold">
                  <p className="skew-x-12">Buy GFLY</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
