import Link from "next/link";

type Props = {
  customBgPos?: string;
  imageURL: string;
  imageTransform?: string;
  title: string;
  description: string;
  btnLink: string;
  btnText: string;
  reverse?: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// This is very similar to the HeroImageComponent in the home folder
// However, this has some small changes
// 1. static bg color and default to focus on bg-left
// 2. btn link will always open in a new tab
// 3. single div (instead of 2) at the end that pushes the content to one side

function HeroSlideImageComponent({
  customBgPos,
  imageURL,
  imageTransform,
  title,
  description,
  btnLink,
  btnText,
  reverse,
}: Props) {
  return (
    <div
      className={classNames(
        customBgPos ? customBgPos : "bg-left",
        "hero bg-base-100 bg-blend-color-dodge md:bg-cover md:bg-blend-lighten"
      )}
      style={{
        backgroundImage: `url(${imageURL})`,
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
        </div>
        <div className="hidden w-full md:flex"></div>
      </div>
    </div>
  );
}

export default HeroSlideImageComponent;
