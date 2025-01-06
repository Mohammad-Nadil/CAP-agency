import "./globals.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title className="capitalize"> ORTENCEY </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
