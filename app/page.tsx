import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import LiveRow from "@/components/LiveRow";
import MusicRow from "@/components/MusicRow";
import Navbar from "@/components/Navbar";
import Row from "@/components/Row";
import ShortsRow from "@/components/ShortsRow";
import VlogRow from "@/components/VlogRow";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner />
<LiveRow />
      <div className="pt-20 px-6">
        <Row title="Trending Now" />
        <ShortsRow />
        <Row title="Recommended For You" />
        <Row title="Popular Shorts" />
        <VlogRow />
        <MusicRow />
      </div>
      <Footer />
    </div>
  );
}