import Navbar from "@/components/nav";
import AboutUs from "@/components/about";
import Footer from "@/components/footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default About;
