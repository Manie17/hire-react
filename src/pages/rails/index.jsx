import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "../../styles/testimonial.css";
import "../../styles/global.css";
import "../../styles/accordion.css"
import Layout from "../../components/Layout";
import FaqAccordion from "../../components/Accordion";
import TestimonialCard from "../../components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import BannerImg from "../../images/ReactDevImages/Bannerimg.png";
// import bussinessImage from "../../images/ReactDevImages/bussinessimg.png";
// import Railslogo from "../../images/ReactDevImages/Railslogo.png"
// import serviceImg from "../../images/ReactDevImages/serviceimg.png"
import QReport from "../../images/ReactDevImages/QReport.png";
import Pricebook from "../../images/ReactDevImages/Pricebook-digital.png";
import Toyota from "../../images/ReactDevImages/Toyota.png";






export default function Rails({ data }) {
  const railsItem = data?.allStrapiService?.nodes?.[0];
  const offer = data?.allStrapiOffer?.nodes?.[0];
  const testimonials = data?.allStrapiTestimonial?.nodes ?? [];
 

  const bannerImage = railsItem?.Bannerimg
    ? getImage(railsItem.Bannerimg.localFile)
    : null;

  // const heroLogo = railsItem?.Herologo
  //   ? getImage(railsItem.Herologo.localFile)
  //   : null;
  // const bussinessImage = railsItem?.bussinessImg
  //   ? getImage(railsItem.bussinessImg.localFile)
  //   : null;
  // const serviceImage = railsItem?.serviceImg
  //   ? getImage(railsItem.serviceImg.localFile)
  //   : null;
 
    const logos=[
       { id: 1, img: QReport},
       { id: 2, img: Pricebook},
       { id: 3, img: Toyota},
       { id: 4, img: QReport},
       { id: 5, img: Toyota},
       { id: 6, img: QReport},
       { id: 7, img: Pricebook},
       {id:8,img:QReport},
       {id:9,img:Pricebook},

       ];


 return (
    <Layout>
      {/* HERO SECTION */}
       <div className="hero-logo-container">
          {/* {heroLogo && (
            <GatsbyImage
              image={heroLogo}
              alt="Hero Logo"
              className="hero-logo"
            />
          )} */}
              <StaticImage
                      src="../../images/ReactDevImages/Railslogo.png"
                      alt="banner-img"
              />
 </div>
  
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-left">
              <h1 className="h1 green">{railsItem.heroTitle1}</h1>
              <h1 className="h2">{railsItem.heroTitle2}</h1>
              <p className="hero-desc">{railsItem.heroPassage}</p>

              <div className="hero-bottom">
                {railsItem.heroBtn && (
                  <a href={railsItem.heroBtn.slug}>
                    <button className="hero-btn">
                      {railsItem.heroBtn.title}
                    </button>
                  </a>
                )}
              </div>
            </div>

            <div className="hero-right">
              {/* {bannerImage && (
                <GatsbyImage
                  image={bannerImage}
                  alt="Rails"
                  className="hero-img"
                />
              )} */}
              {/* <img src={BannerImg} alt="Banner" /> */}
              <StaticImage
                src="../../images/ReactDevImages/Bannerimg.png"
                alt="banner-img"
              />
             </div>
          </div>
      </div>    
        

        {/* CLIENT LOGOS */}
        {/* <div className="client-logo-wrapper">
          {/* {railsItem.clientLogo?.map((img, index) => (
            <GatsbyImage
              key={index}
              image={getImage(img.localFile)}
              className="client-logos"
              alt="Client Logo"
            />
          ))} */}
        {/* </div> */} 
        {/* </div> */}

        <div className="client-logo-wrapper">
        <div className="logo-track">
         {[...logos, ...logos].map((logo, index) => (
         <img key={index} src={logo.img} alt="client logo" />
        ))}
       </div>
       </div>

      {/* OVERVIEW SECTION */}
      <div className="overview-container cmn-container">
        <div className="overview-btn-wrapper">
          <button className="overview-btn">
            {railsItem.overviewBtn.overviewBtnTitle}
          </button>
        </div>

        <div className="overview-grid">
          <div className="overview-left">
            <h1 className="overview-title">{railsItem.overviewTitle}</h1>
          </div>

          <div className="overview-right">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {railsItem.overviewPass1.data.overviewPass1}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* OFFER SECTION */}
      <div className="offer-sec">
        <div className="cmn-container">
          <div className="offer-grid">
            <div className="offer-left">
              <h1 className="offer-title h2">{offer.offerTitle}</h1>
              <p className="offer-p p2 ">{offer.offerPassage}</p>
              {/* {serviceImage && (
                <GatsbyImage
                  image={serviceImage}
                  alt="Hero Logo"
                  className="service-img"
                />
              )} */}
                {/* <img src={serviceImg} alt="serviceimg"/> */}
                <StaticImage
                src="../../images/ReactDevImages/serviceimg.png"
                alt="service-img"
                />
            </div>

            <div className="offer-right">
              {offer.cardComp?.map((card, idx) => (
                <div key={idx} className="offer-card">
                  <h3 className="h7 card-title">{card.offerCardTitle}</h3>
                  <p className="p2">{card.offerCardPassage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bussiness-sec */}
      <div className="bussiness-sec">
        <div className="cmn-container">
          <h1 className="h4 bussiness-h">{railsItem.bussinessTitle}</h1>
          <div className="stats-wrapper">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              slidesPerView={5}
              spaceBetween={80}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              speed={500}
              grabCursor={false}
              allowTouchMove={false}
              className="stats-swiper"
            >
              {railsItem?.StatsComp?.map((stats, idx) => {
                const logoImage = stats?.cliLogo?.localFile
                  ? getImage(stats.cliLogo.localFile)
                  : null;

                return (
                  
                  //   <div className="stats-card">
                  //     {/* {logoImage && (
                  //       <GatsbyImage
                  //         image={logoImage}
                  //         alt="Stats Logo"
                  //         className="stats-logo"
                  //       />
                  //     )} */}
                  // </div>

                  <div className="stats-card">
                    {logos.map((logo) => (
                    <SwiperSlide key={logo.id}>
                   <img src={logo.img} alt="client logo" />
                   <h2 className="stats-value h1">{stats.value}</h2>
                   <p className="stats-text p3">{stats.experience}</p>
                  </SwiperSlide>
                ))}
                </div>
               );
              })}
            </Swiper>
          </div>

          <div className="btn-wrapper">
            <button className="hero-btn">{railsItem.heroBtn.title}</button>
          </div>

          {/* {bussinessImage && (
            <GatsbyImage
              image={bussinessImage}
              alt="Bussiness"
              className="bussiness-img"
            />
          )} */}
          <div className="bussiness-img">
          <StaticImage
          src="../../images/ReactDevImages/bussinessimg.png"
          alt="service-img"
          />
          </div>
          <div className="btn-wrapper">
            <button className="hero-btn">{railsItem.heroBtn.title}</button>
          </div>
        </div>
      </div>





      <div className="testi-sec">
        <div className="testi-head">
          <h1 className="h2 testi-tit">{railsItem.testiTitle}</h1>
        </div>
        <div className="testi-grid">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={3}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testi-next",
              prevEl: ".testi-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                navigation:false,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {testimonials.map((node, idx) => (
              <SwiperSlide key={idx}>
                <div className="testi-swipe">
                  <TestimonialCard data={node.testiComp} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="testi-nav">
          <button className="testi-prev">{"<"}</button>
          <button className="testi-next">{">"}</button>
        </div>
      </div>

      {/* industry-sec */}
      <div className="industry-sec">
        <div className="cmn-container">
          <h1 className="h3 indus-title">{railsItem.industryTitle}</h1>
          <p className="p1 indus-d">{railsItem.industryDesc}</p>
          <div className="industry-grid">
            {railsItem?.indusCard?.map((indus, idx) => {
              const iconImage = indus?.icon
                ? getImage(indus.icon.localFile)
                : null;

              return (
                <div key={idx} className="industry-card">
                  {iconImage && (
                    <GatsbyImage
                      image={iconImage}
                      alt={indus.title}
                      className="industry-icon"
                    />
                  )}
                  <h4 className="p1 icon-title">{indus.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="Price-sec cmn-container">
        <div className="price-head">
          <h1 className="h2">{railsItem.priceTitle}</h1>
        </div>

        <div className="price-grid">
          {railsItem.priceCard?.map((price, idx) => (
            <div className="pricecard" key={idx}>
              <h1 className="h6 price-title">{price.title}</h1>
              <p className="p3 price-p">{price.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hire-sec cmn-container">
        <div className="hire-head">
          <div className="cycli-btn">
            <button className="overview-btn">
              {railsItem.overviewBtn.hireBtn}
            </button>
          </div>
          <h1 className="h3 hire-t">{railsItem.hireTitle}</h1>
        </div>
        <div className="hire-grid">
          {railsItem?.hireCard?.map((hire, idx) => {
            const iconImage = hire?.icon ? getImage(hire.icon.localFile) : null;

            return (
              <div key={idx} className="industry-card">
                {iconImage && (
                  <GatsbyImage
                    image={iconImage}
                    alt={hire.title}
                    className="hire-icon"
                  />
                )}

                <h4 className="p1 hire-title">{hire.title}</h4>
                <p className="p3">{hire.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="carousel-sec cmn container">
        <div className="carousel-body">
          <div className="cycli-btn">
            <button className="testi-btn">
              {railsItem.overviewBtn.testiBtn}
            </button>
          </div>
          <h1 className="h2 carol-t">{railsItem.carouselTitle}</h1>
          <div className="testi-flex">
            <div className="testi-left">
              <div className="carol-nav">
                <button className="carol-next">
                  <span className="arrow-icon"></span>
                </button>
              </div>
            </div>
            <div className="testi-right">
              <Swiper
                modules={[Mousewheel, Navigation]}
                direction={"vertical"}
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                navigation={{
                  nextEl: ".carol-next",
                }}
                speed={800}
                onSlideChange={() => {
                  const btn = document.querySelector(".carol-next");
                  if (!btn) return;
                  btn.classList.add("is-up");
                  setTimeout(() => {
                    btn.classList.remove("is-up");
                  }, 500);
                }}
              >
                {railsItem?.testiComp?.map((carol, idx) => {
                  const profileImg = carol?.profiles?.localFile
                    ? getImage(carol.profiles.localFile)
                    : null;

                  const client = carol?.testiCliLogo?.localFile
                    ? getImage(carol.testiCliLogo.localFile)
                    : null;

                  return (
                    <SwiperSlide key={idx}>
                      <div className="testi-flex">
                        <div className="pfimg">
                        {profileImg && (
                          <GatsbyImage
                            image={profileImg}
                            alt={carol.testiDesignation || "profile"}
                            className="testi-profile-img"
                          />
                        )}
                        </div>
                        <p className="h5">{carol.testiContent}</p>
                      </div>

                      <div className="testi-flex">
                        <p className="p2 testi-desg">
                          {carol.testiDesignation}
                        </p>

                        {client && (
                          <GatsbyImage
                            image={client}
                            alt="client logo"
                            className="testicli-img"
                          />
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-sec cmn-container">
        <div className="faq-head">
          <div className="cycli-btn">
            <button className="overview-btn">
              {railsItem.overviewBtn.faqBtn}
            </button>
          </div>
        </div>

      

         <div className="faq-grid">
          <div className="faq-left indus-d">
            <h1 className="h2 faq-t">{railsItem.faqTitle}</h1>
          </div>
          {railsItem.faqItem?.length > 0 && (
        <FaqAccordion faqItem={railsItem.faqItem} />
      )}
         </div>
      </div>   

      <div className="together-sec cmn-container">
        <div className="together-body">
          <h1 className="h1 toge-title">{railsItem.bottomTitle}</h1>
          <p className="p3">{railsItem.togetherDesc}</p>
          <div className="together-wrapper">
            <button className="together-btn">
              {railsItem.heroBtn.togetherBtn}
            </button>
          </div>
          <p className="p3">{railsItem.togetherPara}</p>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ServiceQuery {
    allStrapiService {
      nodes {
        # ================= HERO =================
        heroTitle1
        heroTitle2
        heroPassage

        Herologo {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }

        Bannerimg {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }

        heroBtn {
          title
          slug
          togetherBtn
        }

        heroBtn2 {
          btnTitle2
        }

        # ================= INDUSTRY =================
        industryTitle
        industryDesc

        

        indusCard {
          title
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100)
              }
            }
          }
        }
        # ================= BUSINESS =================
        bussinessTitle

        bussinessImg {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }

        serviceImg {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }

        # ================= STATS =================
        StatsComp {
          value
          experience
          cliLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100)
              }
            }
          }
        }

        # ================= PRICING =================
        priceTitle

        priceCard {
          title
          description
        }

        # ================= HIRING =================
        hireTitle

        hireCard {
          title
          description
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100)
              }
            }
          }
        }

        # ================= CAROUSEL / CLIENT =================
        carouselTitle

        clientLogo {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }

        # ================= TESTIMONIAL =================
        testiTitle
        testiComp {
          testiContent
          testiDesignation

          profiles {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100)
              }
            }
          }

          testiCliLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100)
              }
            }
          }
        }

        # ================= FAQ =================
        faqTitle
        faqItem {
          faqQs
          faqAns
          arrowIcon {
            localFile {
              childImageSharp {
                gatsbyImageData(width:32, layout: FIXED, placeholder: BLURRED)
              }
            }
          }
        }

        # ================= CTA =================
        bottomTitle
        togetherDesc
        togetherPara

        overviewTitle
        overviewPass1 {
          data {
            overviewPass1
          }
        }

        overviewBtn {
          overviewBtnTitle
          hireBtn
          faqBtn
          testiBtn
        }
      }
    }

    # ================= OFFERS =================
    allStrapiOffer {
      nodes {
        offerTitle
        offerPassage
        cardComp {
          offerCardTitle
          offerCardPassage
        }
      }
    }

    # ================= TESTIMONIAL SLIDER =================
    allStrapiTestimonial {
      nodes {
        testiComp {
          testiName
          testiExperience
          testiLocation

          skills {
            strapi_json_value
          }

          devProfiles {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100,)
              }
            }
          }
        }
        nextNav {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
  }
`;
