import Link from "next/link";
import React from "react";

type Props = {
  divCustomClasses?: string;
  imageURL: string;
  imageTransform?: string;
  title: string;
  description: string;
  btnLink: string;
  btnTarget?: string;
  btnText: string;
  reverse?: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function HeroImageComponent({
  divCustomClasses,
  imageURL,
  imageTransform,
  title,
  description,
  btnLink,
  btnTarget,
  btnText,
  reverse,
}: Props) {
  return (
    <div
      className={classNames(
        reverse ? "bg-base-300 bg-left" : "bg-base-200 bg-right",
        "hero bg-blend-color-dodge md:bg-cover",
        divCustomClasses ? divCustomClasses : ""
      )}
      style={{
        backgroundImage: `url(${imageURL})`,
        transform: imageTransform,
      }}
    >
      <div
        className={classNames(
          reverse ? "md:flex-row-reverse" : "md:flex-row",
          "hero-content flex-col"
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
          <Link href={btnLink} target={btnTarget}>
            <button className="btn-outline btn my-4 -skew-x-12 font-bold">
              <p className="skew-x-12">{btnText}</p>
            </button>
          </Link>
        </div>
        <div className="hidden w-full md:flex"></div>
        <div className="hidden w-full md:flex"></div>
      </div>
    </div>
  );
}

export default HeroImageComponent;
