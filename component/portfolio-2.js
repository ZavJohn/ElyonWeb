// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 


function Portfolio2() {
  const portfolio = [
    {
      title: "DIF Temoaya",
      url: "http://www.temoaya-dif.org.mx/",
      category: ["all", "web_design"],
      img: (
        <Image
          src="/images/projects/pic1.jpg"
          layout="responsive"
          width={370}
          height={370}
          />
      ),
      author: "Elyon Development",
    },
    {
      title: "Hechos para la vida | Toluca",
      url:"https://hechosparalavida.mx/",
      category: ["all", "web_development", "branding", "web_design"],
      img: (
        <Image
          src="/images/projects/pic2.jpg"
          layout="responsive"
          width={370}
          height={370}
          />
      ),
      author: "Elyon Devs",
    },
    {
      title: "Twin Mexico",
      url: "https://twin.mx/",
      category: ["all", "web_design"],
      img: (
        <Image
          src="/images/projects/pic3.jpg"
          layout="responsive"
          width={370}
          height={370}
          />
      ),
      author: "Elyon Devs",
    },
    {
      title: "Grupo Gama",
      url: "https://ggama.mx/",
      category: ["all", "web_design", "web_development", "marketing"],
      img: (
        <Image
          src="/images/projects/pic4.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Elyon Devs",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-2 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              Todo
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a
              active={"web_design"}
              onClick={() => setFilter("web_design")}
            >
              Diseño web
            </a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={"web_development"}
              onClick={() => setFilter("web_development")}
            >
              Desarrollo web
            </a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a
              active={"branding"}
              onClick={() => setFilter("branding")}
            >
              Marca
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a
              active={"mobile_app"}
              onClick={() => setFilter("mobile_app")}
            >
              App Móvil
            </a>
          </li>
          <li className={`btn ${filter === "marketing" ? "active" : ""}`}>
            <a active={"marketing"} onClick={() => setFilter("marketing")}>
              Marketing digital
            </a>
          </li>
        </ul>
      </div>
        <SimpleReactLightbox>
            <SRLWrapper >
              <div className="clearfix">
                <ul id="masonry" className="row" data-column-width="3">
                  {projects.map((item) =>
                    item.filtered === true ? (
                      <>
                        <li
                          className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                          data-wow-duration="2s"
                          data-wow-delay="0.1s"
                        >
                          <div className="dlab-box  style-2 m-b30">
                            <div className="dlab-media ">
                              {item.img}
                            </div>
                            <div className="dlab-info">
                              <h5 className="title">
                                <a href="javascript:void(0);">{item.title}</a>
                              </h5>
                              <p className="post-author">
                                <a href={item.url} target="_blank">Visitar web</a>
                              </p>
                            </div>
                          </div>
                        </li>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
            </SRLWrapper >      
          </SimpleReactLightbox> 
    </>
  );
}

export default Portfolio2;
