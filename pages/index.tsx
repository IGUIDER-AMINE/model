import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import ContactUs from "@/components/sections/ContactUs";
import Models from "@/components/sections/Models";
import Categories from "@/components/sections/Categories";
import AboutUs from "@/components/sections/AboutUs";
import Brands from "@/components/sections/Brands";

export default function Home() {
  return (
    <>
      <Head>
        <title>BR. Models</title>
      </Head>
      <Layout>
        <Banner />
        <Brands />
        <AboutUs />
        <Categories />
        <Models />
        <ContactUs />
      </Layout>
    </>
  );
}
