import { Project } from "../../components";
import { PortfolioData } from "../../shared/CONSTANTS";
import "./style.css";

export const Portfolio = ()=> {
    return (
        <section className="section__Portfolio">
        { PortfolioData.map( project =>(
            <Project 
            nameProject={ project.nameProject }
            projectURL={ project.projectURL }
            tecs={ project }
            arrayImgUrls={ project.imagePreviousProject }
            />
        ))}
        </section>
    )
}