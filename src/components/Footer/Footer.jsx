import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";

function Footer() {
  return (
    <section className=" w-full pt-5 mt-5 bg-purple-600 border border-t-2 border-t-black">
      <div className="relative flex flex-wrap z-10 mx-auto max-w-7xl px-4 ">
        {/* <div className="flex flex-wrap"> */}
        <div className="w-full p-4 md:w-1/2 lg:w-5/12 ">
          <div className="flex h-full flex-col justify-between ">
            <div className="my-2 inline-flex items-center">
              <Logo className="w-80 " />
            </div>
          </div>
        </div>

        <div className="w-full py-5 md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <h3 className="tracking-px mb-5  text-s font-semibold uppercase text-white">
              Company
            </h3>

            <ul>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full py-5 md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <h3 className="tracking-px mb-5  text-s font-semibold uppercase text-white">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-white"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full py-5 md:w-1/2 lg:w-3/12">
          <div className="h-full">
            <h3 className="tracking-px mb-5  text-s font-semibold uppercase text-white">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Footer;
