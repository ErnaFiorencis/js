import { memo, useEffect, useState } from "react";

import Button from "../../components/Button";
import styles from './Create.module.css';
import Input from "../../components/Input";

import axios from 'axios'
import {  useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";



const Create = () => {
    const params = useParams()

    const [currentRobot, setCurrentRobot] = useState(0);

    const [name, setName] = useState("")
    
    const [err, setErr] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if(params.id !== undefined){
            axios.post("/api/robot/robotByID",{id: params.id}).then((res) =>{
                console.log(res.data.name); console.log(res.data.type); setName(res.data.name); setCurrentRobot(res.data.type)
            })
        }

    }, [])

const onClickSubmit = async () => {


    try{
        if(params.id === undefined){
            await axios.post("/api/robot/create", {name: name, type: currentRobot });
        }
        else{
            await axios.post("/api/robot/update", {id: params.id, name: name, type: currentRobot })
        }
        
        
    }
    catch(err){
        console.log(err)
        setErr(true)
    }
    navigate('/')


}
const onChangeInput = (p) => {
    setErr(false)
    setName(p)
    console.log(name)
}
    const robots = [
        '/robot-1.svg',
        '/robot-2.svg',
        '/robot-3.svg',
        '/robot-4.svg',
        '/robot-5.svg',
        '/robot-6.svg',
        '/robot-7.svg',
        '/robot-8.svg',
        '/robot-9.svg',
        '/robot-10.svg'
    ];

    if(name === ""){
        return (<>loading</>)
    }

    return (
        <form className={styles.form}>
            <div className={styles.robotContainer}>
                <img className={styles.robot} src={robots[currentRobot]} alt="robot" />
            </div>
            <div className={styles.buttonContainer}>
                {
                    robots.map((url, index) => {
                        return <Button key={url} label={index + 1} onClick={() => setCurrentRobot(index)} />
                    })
                }
            </div>
            <Input onChange = {onChangeInput} error = {err} v= {name}></Input>
            <Button label = "submit" onClick = {onClickSubmit}></Button>
        </form>
    );
}

export default memo(Create);