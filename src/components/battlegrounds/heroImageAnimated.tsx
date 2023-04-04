import { motion, type Variants } from "framer-motion";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  imageURL: string;
  imageDescription: string;
  mainTitle: string;
  secondaryTitle: string;
  description: string;
  reverse?: boolean;
};

function HeroAnimatedImageComponent({
  imageURL,
  imageDescription,
  mainTitle,
  secondaryTitle,
  description,
  reverse,
}: Props) {
  const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    // make text come from the outside in
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      className={classNames(
        "hero pb-5",
        reverse ? "bg-base-200" : "bg-base-300"
      )}
    >
      <div
        className={classNames(
          "hero-content w-full flex-col",
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        )}
      >
        <Image
          width={350}
          height={350}
          src={imageURL}
          alt={imageDescription}
          className="m-5 rounded-3xl shadow-xl shadow-secondary"
        />

        <div className="hidden grow lg:flex"></div>
        <motion.div
          className="overflow-hidden p-5 text-start"
          variants={parentVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.h1
            variants={childVariants}
            className="tracking text-5xl font-bold uppercase"
          >
            {mainTitle}
          </motion.h1>
          <motion.h2
            variants={childVariants}
            className="pt-6 text-2xl font-bold capitalize"
          >
            {secondaryTitle}
          </motion.h2>
          <motion.p variants={childVariants}>{description}</motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroAnimatedImageComponent;
