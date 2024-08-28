
import "./globals.scss";


export const metadata = {
  title: "Портфолио",
  description: "Портфолио Frontend-разработчика tinyDreamCaster",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='pageBody'>{children}</body>
    </html>
  );
}
