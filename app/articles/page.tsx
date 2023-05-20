import { BeakerIcon } from "@heroicons/react/24/outline";

const articles = [
  {
    year: 2023,
    type: "Article",
    description: "Aria-role button",
    language: "ru",
    link: "https://doka.guide/a11y/role-button/",
  },
  {
    year: 2023,
    type: "Article",
    description:
      "Migrating single-spa monorepo to vite with minimal changes in PR",
    language: "en",
    link: "https://dev.to/jkorichneva/migrating-single-spa-monorepo-to-vite-with-minimal-changes-in-pr-22l2",
  },
  {
    year: 2023,
    type: "Translation",
    description: "React Documentation: Strict Mode",
    language: "ru",
    link: "https://ru.react.dev/reference/react/StrictMode",
  },
];
export default function Page() {
  return (
    <ul className="min-w-full flex flex-col flex-grow">
      {articles
        .sort((a, b) => (a.year > b.year ? -1 : 0))
        .map((article) => (
          <li className="py-2 flex flex-row">
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
  );
}
