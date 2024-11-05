import "./globals.css";
import "./img.css";
import LanguageProvider from "./hooks/useLanguage";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
