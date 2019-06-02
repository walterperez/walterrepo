import React from "react";
import Footer from "../components/footer.js";
import Project from "./../components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight, faFileAlt } from "@fortawesome/free-solid-svg-icons";
//Images
import image from "../img/notesapp.png";
import image2 from "../img/cuttingguru.png";
import image3 from "../img/walkerbarbershop.png";
import image4 from "../img/walterrepo.png";
import image5 from "../img/wd1.png";
import image6 from "../img/wd2.png";

const Blog1 = () => {
  return (
    <div className="Blog MyProjects" id="MyProjects">
      <h1 className="MyProjects_title title">
        {" "}
        <FontAwesomeIcon icon={faFileAlt} size="sm" /> My Projects
      </h1>
      <hr />

      <Project
        title={"Notes App"}
        img={image}
        techStack={[
          "HTML 5",
          "CSS3",
          "JavaScript",
          "Node.js",
          "Express",
          "Handlebars",
          "Boostrap 4"
        ]}
        description={
          "In this project, I was mainly focused on learning Express (and a bitof MongoDB) and undertanding how work the server in a very simpleway."
        }
        git={"https://github.com/waltermaniaco/notes-web"}
        test={""}
      />
      <hr />

      <Project
        title={"Cutting Guru"}
        img={image2}
        techStack={["HTML 5", "CSS3", "Wordpress"]}
        description={
          "This project was focus on giving the freedom to the buisness owner of updating his website when he wish, so I decided to use Wordpress.I thought him how to use and update his website."
        }
        git={""}
        test={"http://www.cuttingguru.co.uk"}
      />
      <hr />

      <Project
        title={"Walker Barbershop"}
        img={image3}
        techStack={["HTML 5", "CSS3", "JavaScript"]}
        description={
          "In this project I was starting to learn about the web development world, so I only knew about those 3 technologies in that time. Whith those techs I built a website for a Barbershop owner."
        }
        git={""}
        test={""}
      />
      <hr />

      <Project
        title={"Walter.Repo"}
        img={image4}
        techStack={[
          "React.js",
          "Redux",
          "JavaScript",
          "HTML 5",
          "CSS3",
          "Sass",
          "Firebase"
        ]}
        description={
          "In this project, I was learning react and redux, I learn as well how to work with firebase and another tools like webpack."
        }
        git={"https://github.com/waltermaniaco/BR"}
        test={"http://www.walterrepo.co.uk/"}
      />
      <hr />

      <Project
        title={"WalterDesigns v1.0"}
        img={image5}
        techStack={["JavaScript", "HTML 5", "CSS3"]}
        description={
          "This was going to be the my first portfolio, in the time when I only knew HTML5, CSS3 and JavaScript, I did this little website, but it didnt see the light because I though I could do it better."
        }
        git={""}
        test={""}
      />
      <hr />

      <Project
        title={"WalterDesigns v2.0"}
        img={image6}
        techStack={["JavaScript", "HTML 5", "CSS3"]}
        description={`This website pretended to be the next version of my portfolio, but I did not finish it because I prefered to use something that looks more symple and you could play with a little bit more, not just a static website.`}
        git={""}
        test={""}
      />

      <Footer />
    </div>
  );
};

export default Blog1;
