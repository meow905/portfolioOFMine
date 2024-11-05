import { useLanguage } from "../hooks/useLanguage";

export default function ChangeButtun({ rotate = true }) {
  const { language, languagesArr, handleChange } = useLanguage();
  return (
    <button
      onClick={handleChange}
      className={`${rotate ? "-rotate-90" : "rotate-0"}`}
    >
      <span className="text-l divide-x-2 divide-black">
        {languagesArr.map((lang) => {
          return (
            <span
              key={lang.lang}
              className={`p-1 ${lang.lang === language ? "underline" : ""}`}
            >
              {lang.text}
            </span>
          );
        })}
      </span>
    </button>
  );
}
