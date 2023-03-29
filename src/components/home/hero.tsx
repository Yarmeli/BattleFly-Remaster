import Link from "next/link";
import React from "react";

function HeroComponent() {
  return (
    <div className="hero bg-base-200 pb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="aspect-video">
          <video
            className="h-full w-full animate-pulse rounded-3xl shadow-xl shadow-primary"
            autoPlay
            loop
            muted
            src="https://assets.website-files.com/61ecf535450144ab4fe1e3c0/63ef16aa854a6348aa36dfdc_BattleflyVideo-transcode.mp4"
          />
        </div>
        <div className="p-5 text-center">
          <h1 className="text-3xl font-bold uppercase">Battlegrounds</h1>
          <p className="py-6">
            A Play to Earn Web3 strategy game<br></br>Ready for a challenge?
          </p>
          <div className="flex flex-row gap-3">
            <button className="btn-primary btn font-bold">Play Now</button>
            <Link href="https://discord.gg/battlefly-game" target="_blank">
              <button className="btn-outline btn font-bold">
                Join Discord
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
