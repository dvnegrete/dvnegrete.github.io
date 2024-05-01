import { Project } from "../../components";
import { PortfolioData } from "../../shared/CONSTANTS";
import "./style.css";

export const Portfolio = () => {
    return (
        <section className="section__Portfolio">
            {PortfolioData.map(project => (
                <Project
                    key={project.nameProject}
                    nameProject={project.nameProject}
                    projectURL={project.projectURLGithub}
                    webURL={project.webURL}
                    description={project.description}
                    tecs={project}
                    arrayImgUrls={project.imagePreviousProject}
                />
            ))}
        </section>
    )
}