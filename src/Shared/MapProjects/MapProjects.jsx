import { useState } from "react";
import { useEffect } from "react";
import ShowProject from "./ShowProject";


const MapProjects = () => {

    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('projectInfo.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    // console.log(projects)
    return (
        <div className="bg-[#f9f9f9] my-20 p-10">
            <div className="container mx-auto">
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-[#174984]">Project</h2>
                    <p className="text-xl font-semibold">Each project reflects our unwavering dedication to combining the latest front-end technologies</p>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    {
                        projects.map(project => <ShowProject key={project.id} project={project}></ShowProject>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MapProjects;