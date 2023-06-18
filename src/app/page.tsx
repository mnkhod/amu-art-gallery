"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { Button } from "@rewind-ui/core";
import Link from "next/link";

export default function Home() {
  const navIconStyle = "w-auto h-8";

  return (
    <main className="w-full flex justify-center">
      <div className="md:w-9/12 flex flex-col items-center">
        <div className="flex justify-center py-16 border border-2 border-l-0 border-r-0 w-full">
          <div className="w-9/12 flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
            <h1 className="text-2xl md:text-3xl">{"Amu's Art Gallery"}</h1>
            <ul className="flex gap-4 md:gap-6 items-center">
              <li>
                <a href="">
                  <p className="text-sm md:text-lg">Buy Now</p>
                </a>
              </li>
              <li className="h-full w-0.5 bg-gray-300"></li>
              <li>
                <a href="https://www.facebook.com/gunigtai.amu">
                  <Icon icon="devicon:facebook" className={navIconStyle} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/namuun_afk">
                  <Icon icon="skill-icons:instagram" className={navIconStyle} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-24 md:w-9/12 flex flex-col md:flex-row w-full h-full px-12 md:px-0 md:py-16 md:h-[600px]">
          <div className="md:w-7/12 flex flex-col gap-3 items-center justify-center h-full w-full">
            <h1 className="text-5xl text-center font-bold tracking-[2px]">
              Amu,Master Drawings
            </h1>

            <Link href="https://www.instagram.com/namuun_afk" className="w-full flex justify-center">
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
            </Link>
          </div>
          <div className="relative h-[400px] w-full">
            <Image src={"/0.jpg"} alt={"Art"} fill />
          </div>
        </div>
      </div>
    </main>
  );
}
