import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div>
      <h1>This is a dope Spotify 2.0 app</h1>
      <main>
        <Sidebar />
      </main>
    </div>
  );
}
