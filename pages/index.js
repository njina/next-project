import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContents from "../components/MainContents";

export default function Home() {
  return (
    <>
      <Header />
      <MainContents />
      <Footer />
    </>
  );
}
