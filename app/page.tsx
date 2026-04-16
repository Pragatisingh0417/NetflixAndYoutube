import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Row from "@/components/Row";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner />

      <div className="pt-20 px-6">
        <Row title="Trending Now" />
        <Row title="Recommended For You" />
        <Row title="Popular Shorts" />
      </div>
      <Footer />
    </div>
  );
}