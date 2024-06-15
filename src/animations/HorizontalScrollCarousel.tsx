import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    id: 1,
    title: "title 1",
    url: "http://dummyimage.com/204x100.png/ff4444/ffffff",
  },
  {
    id: 2,
    title: "title 2",
    url: "http://dummyimage.com/145x100.png/ff4444/ffffff",
  },
  {
    id: 3,
    title: "title 3",
    url: "http://dummyimage.com/139x100.png/ff4444/ffffff",
  },
  {
    id: 4,
    title: "title 4",
    url: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
  },
  {
    id: 5,
    title: "title 5",
    url: "http://dummyimage.com/241x100.png/dddddd/000000",
  },
  {
    id: 6,
    title: "title 6",
    url: "http://dummyimage.com/116x100.png/ff4444/ffffff",
  },
  {
    id: 7,
    title: "title 7",
    url: "http://dummyimage.com/212x100.png/cc0000/ffffff",
  },
  {
    id: 8,
    title: "title 8",
    url: "http://dummyimage.com/108x100.png/dddddd/000000",
  },
  {
    id: 9,
    title: "title 9",
    url: "http://dummyimage.com/164x100.png/ff4444/ffffff",
  },
  {
    id: 10,
    title: "title 10",
    url: "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
  },
  {
    id: 11,
    title: "title 10",
    url: "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
  },
  {
    id: 12,
    title: "title 10",
    url: "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
  },
  {
    id: 13,
    title: "title 10",
    url: "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
  },
];
export const HorizontalScrollCarousel = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Down
        </span>
      </div>

      <ScrollArea />

      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Up
        </span>
      </div>
    </div>
  );
};

const ScrollArea = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[900vh] bg-neutral-900">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{
            x,
          }}
          className="flex gap-4"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[650px] w-[650px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
