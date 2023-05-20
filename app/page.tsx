import Image from "next/image";
import blohey from "../public/blohey.jpg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-center sm:justify-between">
      <Image
        src={blohey}
        width={300}
        height={500}
        alt="Blohey from Ikea sitting before the laptop with a cup of tea"
      />
      <div className="ml-4">
        <p>
          <b>Hey!</b> My name is Jana. I am a Senior Frontend developer based in
          Tbilisi with more than six years of experience. I specialize in React
          and its' ecosystem, but also have experience in backend and devops. I
          love automating manual operations and enhancing Dev experience. My
          great inspiration is to shape thoughts into articles, code, and also
          to speak publicly.
        </p>

        <h2 className="font-bold py-2">Tech stack:</h2>
        <ul>
          <li>React, redux, redux-toolkit, TS, JS</li>
          <li>styled-components, postcss, tailwind, sass</li>
          <li>webpack, vite, jest, playwright</li>
          <li>kubernetes, helm-charts, prometheus, grafana, datadog</li>
        </ul>

        <h2 className="font-bold py-2">Interests:</h2>
        <p>
          In my free time I like to solve problems on Leetcode and read news
          about web technologies. Also I enjoy ice-skating and pole sport.
        </p>
        <h2 className="font-bold py-2">Languages: </h2>
        <ul>
          <li>English C1-C2 (working on getting to C2)</li>
          <li>German B1</li>
        </ul>
      </div>
    </div>
  );
}
