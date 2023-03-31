import Link from "next/link";

type Props = {
  videoURL: string;
  title: string;
};

function HeroFullVideoComponent({ videoURL, title }: Props) {
  return (
    <div className="hero w-full bg-base-200 pb-5">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="relative w-full">
          <video
            className="relative z-0 h-full w-full -skew-x-12 animate-pulse rounded-3xl opacity-20 shadow-xl shadow-primary"
            autoPlay
            loop
            muted
            src={videoURL}
          />
          <div className="absolute left-[50%] top-[50%] mx-auto translate-x-[-50%] translate-y-[-50%] p-5 text-center">
            <h1 className="rounded-xl p-3 text-2xl font-bold uppercase tracking-widest md:text-6xl">
              {title}
            </h1>
            <button className="btn-primary btn mt-5 -skew-x-12 font-bold">
              <p className="skew-x-12">Play Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFullVideoComponent;
