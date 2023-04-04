import Image from "next/image";
import Link from "next/link";

type Props = {
  divCustomClasses?: string;
  imageURL: string;
  imageTransform?: string;
  title: string;
  description: string;
  btnLink: string;
  secondImageURL: string;
  secondImageAlt: string;
  btnText: string;
  reverse?: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function HeroTwoImageComponent({
  divCustomClasses,
  imageURL,
  imageTransform,
  title,
  description,
  btnLink,
  btnText,
  secondImageURL,
  secondImageAlt,
  reverse,
}: Props) {
  return (
    <div
      className={classNames(
        // use custom values or fallback to the default
        divCustomClasses
          ? divCustomClasses
          : reverse
          ? "bg-base-300 bg-left"
          : "bg-base-200 bg-right",
        "hero bg-blend-color-dodge md:bg-cover md:bg-blend-lighten"
      )}
      style={{
        backgroundImage: `url("${imageURL}")`,
        transform: imageTransform,
      }}
    >
      <div
        className={classNames(
          reverse ? "md:flex-row-reverse" : "md:flex-row",
          "hero-content w-full flex-col"
        )}
        style={{ transform: imageTransform }}
      >
        <div className="p-5 text-start">
          <h1 className="text-3xl font-bold uppercase">{title}</h1>
          {description.split("\r\n").map((e, idx) => (
            <p key={idx} className="pt-6">
              {e}
            </p>
          ))}
          <Link href={btnLink} target="_blank">
            <button className="btn-outline btn my-4 -skew-x-12 font-bold">
              <p className="skew-x-12">{btnText}</p>
            </button>
          </Link>
          <Image
            src={secondImageURL}
            height={600}
            width={600}
            alt={secondImageAlt}
          />
        </div>
        <div className="hidden w-full md:flex"></div>
      </div>
    </div>
  );
}

export default HeroTwoImageComponent;
