import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

export default function Project({
  title,
  img,
  techStack,
  description,
  git,
  test
}) {
  return (
    <div className="MyProjects__Project">
      <h3 className="MyProjects__Project__title subtitle">{title}</h3>
      <div className="MyProjects_Project__PhotoList">
        <div className="MyProjects_Project__img">
          <img src={img} alt="" className="img" />
        </div>
        <ul className="MyProjects__Project__list">
          <p>Tecnologies used:</p>
          {techStack.map((tech, index) => {
            return (
              <li key={index} className="MyProjects__Project__list__item">
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="MyProjects__Project__description">
        <p>{description}</p>
        {test && (
          <a href={test}>
            {" "}
            <FontAwesomeIcon icon={faHandPointRight} size="sm" />
            Demo
          </a>
        )}
        <br />
        {git && (
          <a href={git}>
            {" "}
            <FontAwesomeIcon icon={faHandPointRight} size="sm" />
            Code
          </a>
        )}
      </div>
    </div>
  );
}
