import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "learning through the official NextJS documentation",
};

export default function Page() {
  return (
    <div>
      <Header />
    </div>
  );
}
