import { BeakerIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const talks: Talk[] = [
  {
    id: 1,
    year: 2022,
    description:
      "Digital accessibility talk in 5 parts, (ru), internal knowledge sharing",
    slides:
      "https://drive.google.com/drive/folders/1vtDKcd-L2vWTuNVot7IH7BYRZlTpoWIe?usp=sharing",
  },
  {
    id: 2,
    year: 2021,
    description: "BF Cache, (en), internal knowledge sharing",
    slides:
      "https://docs.google.com/presentation/d/1Oa3NyG6rh5ErCs7FBiPGQ8NpjSmS9kRL/edit?usp=sharing&ouid=101306604524264110270&rtpof=true&sd=true",
  },
];
type Talk = {
  id: number;
  year: number;
  description: string;
  slides?: string;
  video?: string;
};

export default function Page() {
  return (
    <>
      <SectionHeader title="Highlights" />
      <ul className="min-w-full flex flex-col flex-grow">
        {talks
          .sort((a, b) => (a.year > b.year ? -1 : 0))
          .map((talk) => (
            <li key={talk.id} className="py-2 flex flex-row">
              <b>{talk.year}</b>
              <div className="ml-3">
                {talk.description}
                <div>
                  {talk.slides && (
                    <a className="underline" href={talk.slides}>
                      Slides
                    </a>
                  )}
                  {talk.video && (
                    <a className="underline" href={talk.video}>
                      Video
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
