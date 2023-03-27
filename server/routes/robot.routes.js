import express from 'express';
const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';
import {Err} from '../utils/error.util'
import {asyncHandler} from '../utils/async.util'

router.get('/', asyncHandler(RobotCtrl.getAllRobots));

router.post('/create', asyncHandler(RobotCtrl.create));

router.post('/update', asyncHandler(RobotCtrl.update))

router.post('/robotByID', asyncHandler(RobotCtrl.getRobotByID))

export default router;
