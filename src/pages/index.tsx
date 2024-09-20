import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>Home</h1>
      <h2 className={style.h2}>this is h2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
