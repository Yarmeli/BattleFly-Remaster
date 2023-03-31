import Link from "next/link";

type Props = {
  videoURL: string;
  title: string;
  description: string;
};

function HeroVideoComponent({ videoURL, title, description }: Props) {
  return (
    <div className="hero bg-base-200 pb-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="aspect-video p-5 sm:p-8 md:p-16">
          <video
            className="h-full w-full -skew-x-12 animate-pulse rounded-3xl shadow-xl shadow-primary"
            autoPlay
            loop
            muted
            src={videoURL}
          />
        </div>
        <div className="max-w-sm p-5 text-center">
          <h1 className="text-3xl font-bold uppercase">{title}</h1>
          <p className="whitespace-pre-line py-6">{description}</p>
          <div className="flex flex-row gap-3">
            <button className="btn-primary btn -skew-x-12 font-bold">
              <p className="skew-x-12">Play Now</p>
            </button>
            <Link href="https://discord.gg/battlefly-game" target="_blank">
              <button className="btn-outline btn -skew-x-12 font-bold">
                <p className="skew-x-12">Join Discord</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVideoComponent;
