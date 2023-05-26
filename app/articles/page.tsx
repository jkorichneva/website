import { BeakerIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const articles = [
  {
    id: 1,
    year: 2023,
    type: "Article",
    description: "Aria-role button",
    language: "ru",
    link: "https://doka.guide/a11y/role-button/",
  },
  {
    id: 2,
    year: 2023,
    type: "Article",
    description:
      "Migrating single-spa monorepo to vite with minimal changes in PR",
    language: "en",
    link: "https://dev.to/jkorichneva/migrating-single-spa-monorepo-to-vite-with-minimal-changes-in-pr-22l2",
  },
  {
    id: 3,
    year: 2023,
    type: "Translation",
    description: "React Documentation: Strict Mode",
    language: "ru",
    link: "https://ru.react.dev/reference/react/StrictMode",
  },
  {
    id: 5,
    year: 2023,
    type: "Article",
    description: "How I re-wrote all my composite actions to workflows and why",
    language: "ru",
    link: "https://dev.to/jkorichneva/how-i-re-wrote-all-my-composite-actions-to-workflows-and-why-14a5",
  },
  {
    id: 6,
    year: 2023,
    type: "Article",
    description: "Is your PR really ready for review?",
    language: "ru",
    link: "https://dev.to/jkorichneva/is-your-pr-really-ready-for-review-16c2",
  },
];
export default function Page() {
  return (
    <>
      <SectionHeader title="Articles/Contributions" />
      <ul className="min-w-full flex flex-col flex-grow">
        {articles
          .sort((a, b) => (a.year > b.year ? -1 : 0))
          .map((article) => (
            <li className="py-2 flex flex-row" key={article.id}>
              <b>{article.year},</b>
              <div className="ml-3">
                {article.type} - {article.description}, {article.language}
                <div>
                  {article.link && (
                    <a className="underline" href={article.link}>
                      Link
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
