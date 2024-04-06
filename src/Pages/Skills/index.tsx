import './styles.css'

const CONSTANTS_SKILLS = [
    'HTML5',
    'CSS3',
    'JavaScript (ECMAScript 6+)',
    'Typescript',
    'VueJS',
    'ReactJS',
    'Angular',
    'AngularJS',
    'StencilJS',
    'Mongo DB',
    'Firebase',
    'MySQL',
    'Git',
    'GitHub',
    'BItbucket',
    'NodeJS', 
    'ExpressJS', 
    'JWT',
    'Cloud Computing: AWS, GCP, Azure',
    'App Engine GCP',
    'App Service Azure',
    'Cloud Functions',
    'Azure Blob Storage',
    'Cloud Storage',
    'S3 de AWS',
    'Railway',
    'JIRA',
    'Confluence',
]

export const Skills = ()=> {
    return (
        <section className='section__skills'>
            <ul>
                {
                    CONSTANTS_SKILLS.map( skill => ( <li>{ skill }</li> ))
                }
            </ul>
        </section>
    )
}