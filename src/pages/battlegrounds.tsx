import HeroFullVideoComponent from "@/components/battlegrounds/heroFullVideo";
import HeroAnimatedImageComponent from "@/components/battlegrounds/heroImageAnimated";
import HeroSlideImageComponent from "@/components/battlegrounds/heroSlideImage";
import HeroTwoImageComponent from "@/components/battlegrounds/heroTwoImages";
import { type NextPage } from "next";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const SwiperComponent = dynamic(
  () => import("@/components/battlegrounds/swiper"),
  {
    ssr: false,
  }
);

const SwiperCoverflowComponent = dynamic(
  () => import("@/components/battlegrounds/swiperCoverflow"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <>
      <HeroFullVideoComponent
        videoURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63f48b817b5b9e1cdb1defee_battlegrounds1-transcode.mp4"
        title="Battlegrounds"
      />

      {/* BUILD */}

      <HeroAnimatedImageComponent
        imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/64085009488ec8edb391d8b1_Screenshot%25202023-02-24%2520at%25201.11.40%2520pm-p-500.png"
        imageDescription="Image of a BattleFly being built"
        mainTitle="Build"
        secondaryTitle=" Build the ultimate fighting machine"
        description="Each BattleFly has 4 mod slots. Mod packs can be scavenged,
      allowing you to customize your BattleFly."
      />

      {/* BATTLE */}

      <HeroAnimatedImageComponent
        imageURL="/Battle-img.png"
        imageDescription="Image of a BattleFly battling"
        mainTitle="Battle"
        secondaryTitle="Unlease your BattleFly in the arena"
        description="Engage in epic battles against other players, with the ability to
        participate in 100 battles a day."
        reverse
      />

      {/* WIN */}

      <HeroAnimatedImageComponent
        imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63ef9749d75b0b30ec260784_About-Hyperdome%20(1)%202.png"
        imageDescription="Image of a BattleFly winning"
        mainTitle="Win"
        secondaryTitle="Reap real rewards"
        description="Crush your rivals and earn valuable rewards including Magic."
      />

      {/* Swipe */}

      <SwiperComponent
        images={[
          <HeroSlideImageComponent
            key="slide-1"
            imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63efa24d45ff3daa92ce3f3f_Arenas_bk.png"
            imageTransform="scaleX(-1)"
            title="The Arenas"
            description={`
              To start, BattleFlys will be randomly selected to battle using their load-out in the Proving Grounds.
              Advancement to the Hyperdome is determined by the BattleFly's performance.\r\n
              
              The Hyperdome is where BattleFlys compete for recognition and rewards. Once your BattleFly earns its Hyperdome Mark, 
              it's time to leave the Proving Grounds behind and enter a new arena of high-stakes battles.\r\n

              Combat matchmaking in the Hyperdome is based on BattleFly rank and RNG. Two BattleFlys engage in combat using their 
              customised load-out and the victor earns the rewards.
      `}
            btnLink="https://play.battlefly.game"
            btnText="Get Started"
          />,

          <HeroSlideImageComponent
            key="slide-2"
            imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63efc4a31baf3ae7b67c6ff3_Arenas_bk1.png"
            title="Ranking"
            description={`
              The rank system represents a BattleFly's overall performance in the  Hyperdome. 
              If a player wins, their rank goes up. If they lose, their rank goes down.\r\n

              There are 6 Leagues ranks: Larvae, Pupa, Monarch, Predator, Apex & Champion.\r\n

              Champion Rank is a special rank comprised of only the top 10 BattleFlys ABOVE Apex I, 
              with these elite flys earning outsized rewards. With the right skill and determination 
              you can land your BattleFly in the top 10 BattleFlys and guarantee yourself a daily MAGIC reward.`}
            btnLink="https://play.battlefly.game"
            btnText="Get Started"
            reverse
          />,
          <HeroSlideImageComponent
            key="slide-3"
            customBgPos="bg-left-top"
            imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63efca2627bb35d3a136d6bf_Arenas_bk2.png"
            imageTransform="scaleX(-1)"
            title="Rewards"
            description={`
              There are three ways BattleFlys can earn MAGIC: \r\n
              1. Battle Winnings: Earn 0.09 MAGIC from each Battle won.\r\n
              2. Daily Leaderboard Payout: Earn daily MAGIC rewards for winning the most battles in your rank.\r\n
              3. Champion Leaderboard Payout: Rank up to the top 10 BattleFlys above Apex I.`}
            btnLink="https://play.battlefly.game"
            btnText="Get Started"
          />,
        ]}
      />

      {/* Two Image Component */}

      <HeroTwoImageComponent
        imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/6408502fb78deb1b276626d9_Component%202%20-%20Slider%20(1).png"
        title="Mod Packs"
        description={`
      Elevate your BattleFly by strategically selecting the perfect mod from a Modpack to upgrade your gear and dominate the competition!
    `}
        btnLink="https://www.battlefly.game/blog-categorie/tips-and-tricks"
        btnText="Find out more"
        secondImageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/6422b23b3271b540c8280dbe_ModCards-PNG-p-500.png"
        secondImageAlt="5 different mod cards that can be used in the game"
      />

      <HeroTwoImageComponent
        imageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/6408502fb78deb5c726626d4_Group%2010.png"
        title="Mod Loadout"
        description={`
        Experiment with loadouts in battle and swap out mods from your inventory for optimal performance.
    `}
        btnLink="https://www.battlefly.game/blog-categorie/tips-and-tricks"
        btnText="Find out more"
        secondImageURL="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/6422b4093da290748e6400dd_image%20(1)-p-800.png"
        secondImageAlt="Image of the mod loadout"
        reverse
      />

      {/* Coverflow Effect */}

      <SwiperCoverflowComponent
        images={[
          <Image
            key="image-1"
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/641be86113ab6ea32e472116_DeepDive-Cooounter%20Playooor.jpg"
            width={400}
            height={600}
            alt="Counter Player Mod"
          />,
          <Image
            key="image-2"
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/641be870c2f5a96f17c79704_DeepDive-CriticoolHitooor%20(1).jpg"
            width={400}
            height={600}
            alt="Critical Hit Mod"
          />,
          <Image
            key="image-3"
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63f13f3e8c2e215cf80e4283_deep_slide_bk1.png"
            width={400}
            height={600}
            alt="Farmer Mod"
          />,
          <Image
            key="image-4"
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/641be890c17bb1389d375feb_DeepDive-Freezooor.jpg"
            width={400}
            height={600}
            alt="Freezer Mod"
          />,
          <Image
            key="image-5"
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/641be86113ab6ea32e472116_DeepDive-Cooounter%20Playooor.jpg"
            width={400}
            height={600}
            alt="Counter Player Mod"
          />,
          <Image
            key="image-6"
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/641be870c2f5a96f17c79704_DeepDive-CriticoolHitooor%20(1).jpg"
            width={400}
            height={600}
            alt="Critical Hit Mod"
          />,
          <Image
            key="image-7"
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63f13f3e8c2e215cf80e4283_deep_slide_bk1.png"
            width={400}
            height={600}
            alt="Farmer Mod"
          />,
        ]}
      />

      {/* Call To Action - Play Now */}

      <div className="hero bg-base-200">
        <div className="hero-content flex-col text-center md:flex-row">
          <div className="p-5">
            <h1 className="text-3xl font-bold uppercase">
              Ready to get started?
            </h1>
            <p className="pt-6 text-lg">See you in the Hyperdome!</p>
            <Link href="https://play.battlefly.game/" target="_blank">
              <button className="btn-primary btn my-4 -skew-x-12 font-bold">
                <p className="skew-x-12">Play Now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
