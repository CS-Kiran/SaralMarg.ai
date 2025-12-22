import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "SaralMarg.ai",
  description:
    "A smart civic engagement platform for reporting, tracking, and resolving road infrastructure issues",
};

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
