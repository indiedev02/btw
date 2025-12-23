import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#F5F5F5] rounded-xl px-4 py-8 sm:px-6 lg:px-8 space-y-5">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between">
          <div className="text-3xl font-semibold">Let’s work together.</div>
          <div className="flex items-center font-semibold">
            hello@blackspektro.com
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <div className="md:flex justify-between my-10">
          <div className="flex gap-4 text-xs md:text-base">
            <div className="bg-white rounded-xl p-4">
              <p className="my-2 font-semibold">USA</p>
              <p className="text-[#00000075]">+1 (917) 728-1392</p>
              <p className="text-[#00000075]">
                16192 Coastal Highway, Lewes, <br /> Delaware 19958
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="my-2 font-semibold">INDIA</p>
              {/* <p className='text-[#00000075]'>(+91) 6360716140</p> */}
              <p className="text-[#00000075]">
                Lake Town Rd, Ward 33, Siliguri, <br /> West Bengal – 734007
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-5 md:mt-0 md:flex-col md:justify-normal md:items-end md:text-right">
            <div className="space-y-2">
              <div>
                <Link
                  href="https://kernopy.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  Kernopy
                </Link>
              </div>
            </div>
            <div className="space-y-2 md:mt-2">
              <div>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy policy
                </Link>
              </div>
              <div>
                <Link href="/terms-and-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between space-y-2">
          <div className="text-[#00000075] text-xs lg:text-[16px]">
            © 2025 Blackspektro company
          </div>
          <div className="flex gap-2 text-xs lg:text-lg">
            <Link
              href="https://www.linkedin.com/company/blackspektro/"
              target="_blank"
            >
              <div className="flex items-center font-semibold hover:underline">
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="https://medium.com/blackspektro" target="_blank">
              <div className="flex items-center font-semibold hover:underline">
                Medium
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
