'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Counter from "@/components/Counter";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.description}>
          <RecoilRoot>
            <Counter />
          </RecoilRoot>
        </div>
      </main>
  );
}
