"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { HeroVideoDialogDemo } from "./VideoHero";

export function TabsDemo() {
  const tabs = [
    // {
    //   title: "Product",
    //   value: "product",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Product Tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    // {
    //   title: "Edição",
    //   value: "services",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Services tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    {
      title: "Websites",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>Websites</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Criação Sistemas",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>Criação Sistemas</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Saas",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>Saas</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="siteexempla.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className=" object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent2 = () => {
  return (
    <Image
      src="siteexempla.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const DummyContent3 = () => {
  return (
    <Image
      src="siteexempla.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className=" object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};