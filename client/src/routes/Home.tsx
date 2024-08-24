import { Link } from "react-router-dom";
import steak from "../assets/images/steak.png";
import logo from "../assets/images/ByteMeBistro-2.png";

const Home = () => {
  return (
    <div>
      <div className="w-full bg-primary">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-40 px-8 py-12">
          <div className="flex h-full flex-col justify-between gap-12 pl-8 text-left text-secondary">
            <h1 className="text-6xl font-semibold">
              The Best Food You Will Ever Try.
            </h1>
            <p className="text-lg">
              Bite into Joy, Savor the Flavor—Where Comfort Classics Meet
              Culinary Creativity. <br />
              Every Dish is a Delicious Experience Waiting to Happen.
            </p>
            <Link
              to="/menu"
              className="w-fit rounded-full border-2 px-6 py-2 text-secondary hover:cursor-pointer hover:bg-secondary hover:text-primary"
            >
              Order Now
            </Link>
          </div>
          <img src={steak} alt="steak on main page" className="w-auto" />
        </div>
      </div>
      <div className="bg-secondary">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-24 px-8 py-40 text-primary">
          <img src={logo} alt="Logo" className="w-64" />

          <div className="flex flex-col justify-between gap-8">
            <h1 className="text-start text-4xl font-semibold">Why Us?</h1>
            <p>
              At Byte Me Bistro, our commitment to culinary excellence and
              innovation sets us apart. Led by visionary chef Andrew Tran Shi,
              renowned for his mastery of comfort food with a creative twist, we
              transform everyday dishes into extraordinary culinary experiences.
              Partnering with food connoisseur Joshua Williams ensures that each
              menu item reflects the highest standards of taste and quality,
              promising a dining adventure that exceeds expectations.
            </p>
            <p>
              What truly distinguishes us is our fusion of bold flavors with
              cutting-edge technology, curated by tech-savvy entrepreneur
              Pichborith Kong. From interactive dining experiences to seamless
              service innovations, Byte Me Bistro redefines how guests enjoy
              their meals. Backed by the strategic foresight of business magnate
              Diego Beauperthuy, we are not just a restaurant but a destination
              where innovation meets gastronomy, inviting you to savor moments
              of joy and discovery with every visit.
            </p>
            <div className="flex justify-start">
              <Link
                to="/aboutus"
                className="w-fit rounded-full border-2 border-primary px-6 py-2 hover:cursor-pointer hover:bg-primary hover:text-secondary"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
