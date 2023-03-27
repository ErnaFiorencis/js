import Robot from '../models/robot.model';
import {Err} from '../utils/error.util'

export const create = async (req, res) => {
    const { name, type } = req.body;

    if(name === ""){
        throw new Err(400, "name is required")
    }

    const newRobot = new Robot({ name, type });
    await newRobot.save();

    res.sendStatus(204);
}

export const getAllRobots = async (req, res) => {
    const allRobots = await Robot.find();

    res.json(allRobots);
}

export const getRobotByID = async (req, res) =>{


    const {id} = req.body

    const robot = await Robot.findById(id)
    res.json(robot)
}

export const update = async(req, res) => {
    const {id, name, type} = req.body
    if(name === ""){
        throw new Err(400, "name is required")
    }
    await Robot.updateOne({_id: id}, {$set:{name: name, type: type}})

    res.sendStatus(204);
}

