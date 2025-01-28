import  './Skills.css'
import { FaReact, FaDocker, FaNodeJs, FaLinux, FaJenkins } from "react-icons/fa"; 
import { SiMongodb, SiExpress, SiJavascript  } from "react-icons/si"; 

function  Skills()
{
    const skills = [
        { icon: <FaReact color="#61DBFB" />, name: "React" },
        { icon: <FaDocker color="#2496ED" />, name: "Docker" },
        { icon: <FaLinux color="#FCC624" />, name: "Linux" },
        { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
        { icon: <SiExpress color="#000000" />, name: "Express" },
        { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
        { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
        {icon:<FaJenkins color='#D33833'/>, name: "Jenkins"},
    ];
    return(
          <div id="sk">
            <h1 id="headn">SKILLS</h1>
            <div id="sk-icon">
            {skills.map((skill, index) => (
                    <div key={index} className="skilld">
                        {skill.icon}
                        <p id="txt">{skill.name}</p>
                    </div>
                   
                   
                ))}
            </div>
          </div>
    );
}

export default Skills