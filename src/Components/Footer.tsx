// /components/Footer.tsx
import { FC } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import Facebook and Instagram icons from react-icons

const Footer: FC = () => {
  return (
    <footer className="w-full bg-white mt-10 ">
      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      <div className=' container mx-auto md:px-8'>

        {/* Footer Content */}
        <div className="flex justify-between items-center px-4 py-4">
          {/* Left side text */}
          <p className="text-gray-700 text-sm">
            © 2024 OneLot Technologies Incorporated Pte. Ltd. All Rights Reserved.
          </p>

          {/* Right side text */}
          <p className="text-gray-700 text-sm">
            © 2024 OneLot Financing Corporation. All Rights Reserved.
          </p>

          {/* Right side icons */}
          <div className="flex space-x-4 text-gray-600">
            <FaFacebook className="text-xl hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
