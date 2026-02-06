import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/testimonial.css";
import "../styles/global.css";


const TestimonialCard = ({ data }) => {
  const image = getImage(data.devProfiles?.localFile);
  const skills = data.skills?.strapi_json_value ?? [];
  

  return (
        <div className="testimonial-card">
        {image && (
          <GatsbyImage
            image={image}
            alt={data.testiName}
            className="profile-img"
          />
        )}

        <h1 className="h5">{data.testiName}</h1>

        <p className="p1 flex">
          <span>{data.testiExperience}</span>
        </p>
        <p className="p1 flex">
          <span>{data.testiLocation}</span>
        </p>

        <div className="skills p3">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
  );
};

export default TestimonialCard;
