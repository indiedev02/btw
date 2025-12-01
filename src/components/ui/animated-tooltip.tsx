import Image from "next/image";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-6 lg:-mr-10 2xl:-mr-16"
          key={item.id}
        >
          <Image
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 size-14 md:size-16 lg:size-20 2xl:size-32 rounded-full border-4 border-white object-cover object-top !p-0 transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
