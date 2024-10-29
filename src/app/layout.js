import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

export const metadata = {
  title: "Sebastián Portfolio",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
