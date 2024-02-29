import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input, TextArea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Quicksand } from "next/font/google";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});
export const GetInTouch = () => {
  return (
    <div>
      (
      <section className=" w-[100vw] my-16">
        <div className="content-container flex flex-row-reverse gap-x-28 justify-center  items-start ml-28">
          <div className="w-1/3  flex flex-col justify-center ">
            <h4 className="text-lg font-bold">Get in touch</h4>
            <h1 className="text-4xl font-bold">We'd love to hear from you.</h1>

            <p className="text-sm mt-4 w-4/5 ">
              We are here to answer any question you may have. As a partner of
              corporates, Liquid has more than 9,000 offices of all sizes and
              all potential of session. Our commitment to quality, innovation,
              and customer satisfaction shines through in every stroke of paint,
              contributing to the success and visual excellence of these
              remarkable ventures.
            </p>

            <p className="text-sm my-2 w-4/5">
              Ready to transform your spaces into vibrant masterpieces? Choose
              Subang Paints for unparalleled quality, innovation, and a spectrum
              of colors that speak volumes. Whether it's a residential project,
              a commercial venture, or an infrastructure endeavor, our
              commitment to excellence shines through in every stroke.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <Card className="w-8/10 shadow-2xl border-none">
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-row gap-x-4">
                      <Input
                        id="name"
                        className="border-none rounded-none bg-[#f8f5f3]"
                        placeholder="Full Name"
                      />
                      <Input
                        id="name"
                        className="border-none rounded-none bg-[#f8f5f3]"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="flex flex-col h-[15vh] space-y-1.5">
                      <TextArea
                        // type=""
                        id="name"
                        className="border-none h-full justify-start  rounded-none bg-[#f8f5f3]"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex w-full">
                <Button className="w-full bg-[#d51b78] py-7 text-lg rounded-sm">
                  Get A Quote
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className=" w-[100vw] my-16">
        <div className="content-container flex flex-row gap-x-24 items-center justify-center   ml-28">
          <div className="w-1/3  flex flex-col justify-center ">
            <div className="flex justify-start gap-x-28 items-center">
              <h4 className="text-2xl font-medium text-[#DC137B]  uppercase">
                Say Hello!
              </h4>
              <hr className="w-16 h-[2px] bg-black mr-8"></hr>
            </div>
            <div className="flex justify-start gap-x-36">
              <div className="my-10">
                <Image
                  src={"/icons/phone2.svg"}
                  alt=""
                  className="w-11 h-auto my-4"
                  height={10}
                  width={10}
                />
                <h4 className="font-medium">Telephone</h4>
                <p className="text-sm mt-4 w-4/5 ">
                  +92 333 9066 656
                  <br />
                  +92 300 9776 656
                </p>
              </div>
              <div className="my-10">
                <Image
                  src={"/icons/envelope.svg"}
                  alt=""
                  className="w-11 h-auto my-4"
                  height={10}
                  width={10}
                />
                <h4 className="font-medium">Email</h4>
                <p className="text-sm mt-4 w-4/5 ">subangpaints@gmail.com​</p>
              </div>
            </div>
            <div className="flex justify-start gap-x-36">
              <div className="">
                <Image
                  src={"/icons/location-pin.svg"}
                  alt=""
                  className="w-11 h-auto my-4"
                  height={10}
                  width={10}
                />
                <h4 className="font-medium">Address</h4>
                <p className="text-sm mt-4 w-4/5 ">
                  KD Plaza Badhana Kalan Road Tarnool Islamabad​
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <GoogleMapsEmbed
              apiKey="AIzaSyDOzIiQ5WwWPeoAMJvNzD_k4Kso2GpEaVE"
              height={400}
              width={600}
              mode="place"
              q="Badhana Kalan Road Tarnool Islamabad,"
            />
          </div>
        </div>
      </section>
      )
    </div>
  );
};
