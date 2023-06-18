"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { Button } from "@rewind-ui/core";

export default function Home() {
  const navIconStyle = "w-auto h-4 md:h-5";

  return (
    <main className="w-full flex justify-center">
      <div className="md:w-9/12 flex flex-col items-center">

        <div className="flex justify-center py-16 border border-2 border-l-0 border-r-0 w-full">
          <div className="w-9/12 flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
            <h1 className="text-2xl md:text-3xl">{"Amu's Art Gallery"}</h1>
            <ul className="flex gap-2 md:gap-6 items-center">
              <li>
                <p className="text-sm md:text-lg">Buy Now</p>
              </li>
              <li className="h-full w-0.5 bg-gray-300"></li>
              <li>
                <Icon icon="devicon:facebook" className={navIconStyle} />
              </li>
              <li>
                <Icon icon="skill-icons:instagram" className={navIconStyle} />
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-24 md:w-9/12 flex flex-col md:flex-row w-full h-full px-12 md:px-0 md:py-16 md:h-[600px]">
          <div className="md:w-7/12 flex flex-col gap-3 items-center justify-center h-full w-full">
            <h1 className="text-5xl text-center font-bold tracking-[2px]">
              Amu,Master Drawings
            </h1>

            <Button
              animation="pulse"
              className="w-11/12 md:w-6/12"
              color="white"
              tone="transparent"
              shadow="sm"
              radius="full"
              size="lg"
              withRing={false}
            >
              <p className="font-light text-xs tracking-[5px]">
                Explore her world now
              </p>
            </Button>
          </div>
          <div className="relative h-[400px] w-full">
            <Image src={"/0.jpg"} alt={"Art"} fill />
          </div>
        </div>
      </div>
    </main>
  );
}
