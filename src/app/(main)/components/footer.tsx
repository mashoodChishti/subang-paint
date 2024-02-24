import Link from "next/link";
import Image from "next/image";

import logo from "../../../../public/subang_logo.png";
import Facebook from "@/lib/social-logos/facebook";
import Twitter from "@/lib/social-logos/twiter";
import LinkedIn from "@/lib/social-logos/linkedin";

export const Footer = () => {
  return (
    <footer>
      <div className=" h-[50vh] bg-black py-10 2xl:py-14 text-white  flex flex-col font-ginger  2xl:max-w-1920 2xl:mx-auto">
        <div className="grid grid-col-1 lg:mx-10  ">
          <div className=" grid grid-cols-2    p-4 lg:p-0 lg:grid-cols-4 gap-x-5 md:justify-items-center 2xl:justify-between">
            <div className=" col-span-2">
              <Link href="/" className="text-xl-semi uppercase">
                <Image
                  src={logo}
                  className="h-[15%] w-auto "
                  alt="Company icon"
                />
              </Link>
              <p className=" mt-9   lg:w-[50%] ">
                Subang Paints, a brand synonymous with quality and innovation,
                is proudly brought to you by Subang Paints Chemicals & Coatings
                (Pvt) Ltd, headquartered in the vibrant city of Islamabad,
                Pakistan. With a legacy spanning 14 years in the paint
                manufacturing
              </p>
              <div className="flex my-5 gap-x-4 ">
                <Link href="#">
                  <Facebook className="h-7 w-7 social-icon" />
                </Link>
                <Link href="#">
                  <Twitter className="h-7 w-7 social-icon " />
                </Link>
                <Link href="#">
                  <LinkedIn className="h-7 w-7 social-icon" />
                </Link>
              </div>
            </div>
            <div className="grid w-[100%] col-span-1 justify-items-center 2xl:justify-items-end">
              <div className="my-8 py-3 lg:py-0 h-fit w-fit">
                <h1 className=" font-semibold text-xl  ">Contact</h1>
                <div className="w-[100%] grid gap-y-3 mt-10">
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={"/icons/envelope.svg"}
                      className="social-icon h-7 w-7"
                      height={10}
                      width={10}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="text-[#787870]">
                        Looking for collaboration?
                      </p>
                      <Link href="/terms-and-conditions">
                        subangpaints@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={"/icons/building.svg"}
                      className="social-icon h-7 w-7"
                      height={10}
                      width={10}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="text-[#787870]">Visit Us</p>
                      <Link href="/terms-and-conditions">
                        KD Plaza Badhana Kalan Road Tarnool Islamabad
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={"/icons/phone.svg"}
                      className="social-icon h-7 w-7"
                      height={10}
                      width={10}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="text-[#787870]">
                        Monday - Friday: 08am-9pm
                      </p>
                      <Link href="/terms-and-conditions">
                        +92 333 9066 656, +92 300 9776 656
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid w-[100%] col-span-1 justify-items-center 2xl:justify-items-end">
              <div className="my-8 py-3 lg:py-0 h-fit w-fit">
                <h1 className=" font-semibold text-xl  ">Company</h1>
                <div className="w-[100%] grid gap-y-3 mt-4">
                  <Link href="/">Home</Link>
                  <Link href="/">About Us</Link>
                  <Link href="/">Products</Link>
                  <Link href="/">Services</Link>
                  <Link href="/">Our Projects</Link>
                  <Link href="/">Contact</Link>
                </div>
              </div>
              {/* <div className="flex justify-between">
              <div>
              <img src="/header/master_card.jpg" alt="" />
              </div>
              <div>
              <img src="/header/visa.jpg" alt="" />
              </div>
              <div>
              <img src="/header/apple_pay.jpg" alt="" />
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181b1d] text-[#a0b6b7] text-center py-10">
        <p>© 2018 Subang Paint. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
