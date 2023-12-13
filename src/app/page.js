// Files
import styles from "./page.module.css";
import newStyle from "./example.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={newStyle.first_css}>
      <h1>Hello World!</h1>
      <a href="/examplePage">
        <h2>I am a link to examplePage</h2>
      </a>
    </main>
  );
}
