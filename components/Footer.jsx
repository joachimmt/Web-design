function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4  [#575757]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-[40px] font-semibold whitespace-nowrap bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
            WebDesigneo.
          </span>{" "}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                À propos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Créations
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Webdesigneo™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
