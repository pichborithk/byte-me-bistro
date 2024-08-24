const Footer = () => {
  return (
    <div className="bg-primary text-white shadow-full">
      <div className="mx-auto flex max-w-7xl flex-row justify-between py-16">
        <div className="w-full md:w-1/4">
          <h1 className="pb-4 text-xl font-semibold">Byte Me Bistro</h1>
          <p className="text-sm">The Best Food You Will Ever Try.</p>
        </div>
        <div>
          <h1 className="pb-4 pt-5 text-xl font-medium md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor cursor-pointer transition-all"
              href="/"
            >
              Home
            </a>
            <a
              className="hover:text-brightColor cursor-pointer transition-all"
              href="/menu"
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor cursor-pointer transition-all"
              href="/aboutus"
            >
              About
            </a>
          </nav>
        </div>
        <div>
          <h1 className="pb-4 pt-5 text-xl font-medium md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor cursor-pointer transition-all"
              href="/"
            >
              ByteMeBystro@gmail.com
            </a>
            <a
              className="hover:text-brightColor cursor-pointer transition-all"
              href="/"
            >
              +9990009090
            </a>
            <a
              className="hover:text-brightColor cursor-pointer transition-all"
              href="/"
            >
              Social Media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="py-4 text-center">
          @copyright developed by
          <span className="text-brightColor"> Team 3 </span> | All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
