import { memo, useEffect, useState } from "react";

import Robot from "../../components/Robot";

import axios from 'axios'




const Home = () => {
    const [robots, setRobots] = useState([]);
    

    useEffect(() => {
        axios.get("/api/robot/").then((res) =>setRobots(res.data))

    }, [])

    if (!robots) {
        return (<div>Loading...</div>);
    }

    return (
        <div>
            {robots.map((robot) => <Robot name={`${robot._id}: ${robot.name}`} type={robot.type} key={robot._id} />)}
        </div>
    );
}

export default memo(Home);