import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import PrivacyPolicy from "@/components/privacy";

function Privacy() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 md:pt-16 pt-4 px-2 pb-20">
        <PrivacyPolicy />
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
