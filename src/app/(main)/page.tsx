"use client";
import { AboutUs } from "./components/About-Us";
import { Hero } from "./components/hero";
import { WhySubang } from "./components/why-subang";
import { Services } from "./components/services";
import { ConnectWithUs } from "./components/connect-with-us";
import { BusinessPartners } from "./components/business-partners";
import { Testimonials } from "./components/testimonials";
export const dynamic = "force-dynamic";

async function fetchData() {
  const query = `query getHomePage {    page(id: "cG9zdDo5Nzc=") {
    id
    title
    home {
      about {
        aboutButton
        aboutMainHeading
        aboutParagraphOne
        aboutParagraphTwo
        aboutSmallHeading
      }
      businessPartners {
        businessPartnersMainHeading
        businessPartnersSecondaryHeading
        businessPartnersCards {
          businessPartnersCardsImages {
            node {
              sourceUrl
            }
          }
        }
      }
      connectWithUs {
        connectWithUsButton
        connectWithUsDescription
        connectWithUsHeading
        connectWithUsBackground {
          node {
            sourceUrl
          }
        }
      }
      hero {
        heroButton
        heroDescription
        heroHeading
      }
      services {
        servicesMainDescription
        servicesMainHeading
        servicesReasonOne {
          servicesReasonOneButton
          servicesReasonOneDescription
          servicesReasonOneHeading
          servicesReasonOneImage {
            node {
              sourceUrl
            }
          }
        }
        servicesReasonThree {
          servicesReasonThreeButton
          servicesReasonThreeDescription
          servicesReasonThreeHeading
          servicesReasonThreeImage {
            node {
              sourceUrl
            }
          }
        }
        servicesReasonTwo {
          servicesReasonTwoButton
          servicesReasonTwoDescription
          servicesReasonTwoHeading
          servicesReasonTwoImage {
            node {
              sourceUrl
            }
          }
        }
      }
      testimonials {
        testimonialsHeading
        testimonialsCards {
          testimonialsCardsTestimonial
          testimonialsCardsTestimonialPersonName
        }
      }
      whySubang {
        whySubangMainDescription
        whySubangMainHeading
        whySubangReasonOne {
          whySubangReasonOneButton
          whySubangReasonOneDescription
          whySubangReasonOneHeading
          whySubangReasonOneImage {
            node {
              sourceUrl
            }
          }
        }
        whySubangReasonThree {
          whySubangReasonThreeButton
          whySubangReasonThreeDescription
          whySubangReasonThreeHeading
          whySubangReasonThreeImage {
            node {
              sourceUrl
            }
          }
        }
        whySubangReasonTwo {
          whySubangReasonTwoButton
          whySubangReasonTwoDescription
          whySubangReasonTwoHeading
          whySubangReasonTwoImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}
export default async function Home() {
  const data = await fetchData();
  console.log(data.data.page.home.hero);
  return (
    <main className="w-[100vw]">
      <Hero data={data.data.page.home.hero} />

      <AboutUs />
      <WhySubang />
      <div className=" my-20">
        <Services />
      </div>
      <ConnectWithUs />
      <BusinessPartners />
      <Testimonials />
    </main>
  );
}
