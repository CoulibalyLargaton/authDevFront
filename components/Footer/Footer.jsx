import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { sections, socialLinks } from './data';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  py-8 sm:py-10 lg:py-12">
        {/* top */}
        <div className="flex flex-col 4xl:flex-row justify-between">
          {/* block-1 */}
          <div className="border-2 border-black">
            <h3 className="text-xl font-bold flex justify-center lg:justify-start">
              Authentic Dev
            </h3>
          </div>

          {/* block-2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-0 lg:px-4 2xl:grid-cols-3 border-2 border-black">
            {sections.map((section, index) => (
              <div key={index} className="lg:mx-auto text-left text-nowrap">
                <h4 className="text-lg text-gray-200 font-medium mb-7 ">
                  {section.title}
                </h4>
                <ul className="text-sm transition-all duration-500">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-6">
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-gray-200 transition-all duration-100"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* block-3 */}
          <div className="border-2 border-black">
            <div className="lg:mx-auto text-left lg:col-span-2 col-span-full xl:w-auto">
              <h4 className="text-lg text-white font-medium mb-7">
                Newsletters
              </h4>

              <div className="flex items-center mt-1">
                <input
                  type="email"
                  className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none focus:outline-none rounded shadow-sm bg-yellow-50"
                  placeholder="Votre adresse email"
                />
                <button className="h-10 px-4 text-sm  border border-l-0  rounded-r shadow-sm text-black   hover:border-gray-400 focus:outline-none bg-yellow-200">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="py-7 border-t border-gray-900">
          <div className="flex items-center 2xl:justify-center flex-col lg:justify-between 2xl:flex-row gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Conditions d'utilisation
              </span>
              <span className="text-sm text-gray-500">
                Politique de confidentialité
              </span>
              <span className="text-sm text-gray-500">Licences</span>
            </div>
            <span className="text-sm text-gray-500 text-center ">
              &copy;{' '}
              <Link href="/">2025 Authentic Dev. Tous droits réservés</Link>
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className={link.classes}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
