import HeroFullVideoComponent from "@/components/battlegrounds/heroFullVideo";
import { type NextPage } from "next";
import HeroAnimatedImageComponent from "@/components/battlegrounds/heroImageAnimated";

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
    </>
  );
};

export default Home;
