/* eslint-disable @next/next/no-head-element */
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-lt-installed>
      <head>
        <meta charSet="UTF-8" />
        <link href="/img/favicon.ico" rel="icon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Leonardo Lopez</title>
        <link rel="stylesheet" href="/styles/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="main-content">
        {children}
        <Navbar />
        <script src="/js/app.js"></script>
      </body>
    </html>
  );
}
