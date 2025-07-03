"use client";
import { useRef, useState } from "react";
import clsx from "../../../libs/clsx";
import { Box } from "../box/box.component";

export type TCarouselType = "slide" | "opinion";

interface IProps {
  data: {
    type: TCarouselType;
    items: Array<string>;
  };
  className?: string;
  imgClassName?: string;
}

export const Carousel = ({ data, className, imgClassName }: IProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <Box
      className={clsx(
        `${
          data.type === "slide"
            ? "relative w-full "
            : "relative w-full flex flex-col gap-4"
        }`,
        className
      )}
    >
      <Box
        className={clsx(
          `${
            data.type === "slide"
              ? "relative h-96 overflow-hidden rounded-lg "
              : "relative overflow-hidden"
          }`
        )}
      >
        {data.items.map((item, index) => (
          <Box
            key={index}
            className={clsx(
              `${
                data.type === "slide" && "absolute"
              } inset-0 duration-700 ease-in-out ${
                activeIndex === index ? "block" : "hidden"
              }`
            )}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {data.type === "slide" ? (
              <img
                src={item as string}
                key={`${item as string}-${index}`}
                className={clsx(
                  `absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover`,
                  imgClassName
                )}
                alt={`Slide ${index + 1}`}
              />
            ) : (
              <Box className="flex flex-col gap-4">
                <Box className="flex gap-4 items-center">
                  <Box className="relative bg-gray-100 w-[70px] h-[70px] shadow-lg rounded-full flex justify-center items-center">
                    <Box className="absolute bg-gray-100 size-4 bottom-[4px] right-[4px] shadow-lg" />
                    <img
                      // src={(item as IOpinion).userAvatarUrl}
                      className={clsx(
                        "w-[50px] h-[50px] rounded-full z-10",
                        imgClassName
                      )}
                      alt={`Slide ${index + 1}`}
                    />
                  </Box>
                  <Box className="flex flex-col">
                    {/* <Text>{(item as IOpinion).userFullName}</Text> */}
                    {/* <Box className="flex items-center gap-2">
                      <Icon iconName="MdStar" className="text-starYellow-600" />
                      <Text>{(item as IOpinion).calification}</Text>
                    </Box> */}
                  </Box>
                </Box>
                <Box>{/* <Text>{(item as IOpinion).comment}</Text> */}</Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <Box
        className={clsx(
          `${
            data.type === "slide"
              ? "absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"
              : "z-30 flex gap-3 self-center"
          }`
        )}
      >
        {data.items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-main-950" : "bg-main-300"
            }`}
            aria-current={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </Box>

      {data.type === "slide" && (
        <>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
    </Box>
  );
};
