import Articles from "@/components/Articles";
import TrendingSlide from "@/components/TrendingSlide";
import Image from "next/image";
import Layout from "@/components/Layout";
import ApiArticles from "@/components/ApiArticles";

export default function Home() {
  return (
    <Layout>
        <TrendingSlide/>
        {/* <Articles/> */}
        <ApiArticles/>
    </Layout>
  );
}
