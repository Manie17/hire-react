require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    pathPrefix: `/gatsby-project`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        version: 5,
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_API_TOKEN,

        collectionTypes: [
          {
            singularName: "service",
            queryParams: {
              populate: [
                "Herologo",
                "Bannerimg",
                "clientLogo",
                "bussinessImg",
                "serviceImg",
                "StatsComp.cliLogo",
                "indusCard.icon",
                "industryCard.icon",
                "testiComp.profiles",
                "testiComp.testiCliLogo",
                "heroBtn",
                "heroBtn2",
                "overviewBtn",
                "industryCard.icon",
                "priceCard.icon",
                "hireCard.icon",
                "faqItem.arrowIcon",
              ],
            },
          },

          {
            singularName: "offer",
            queryParams: {
              populate: "*",
            },
          },
          {
            singularName: "testimonial",
            queryParams: {
              populate: [
                "testiComp.devProfiles",
                "nextNav",
              ],
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
