import Image from "next/image";
import blohey from "../public/blohey.jpg";

export default function Home() {
  return (
    <div className="flex items-center">
      <Image
        src={blohey}
        width={300}
        height={500}
        alt="Blohey from Ikea sitting before the laptop with a cup of tea"
      />
      <div className="ml-4">
        Hey! My name is Jana. I am a Senior Frontend developer with full-stack
        background, who worked both in startups and in enterprise companies.
      </div>
    </div>
  );
}
