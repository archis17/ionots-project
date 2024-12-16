const express = require('express');
const Project = require('../models/Project');
const Candidate = require('../models/Candidate');
const router = express.Router();

//Assigning projects
router.post('/assign', async(req,res)=> {
    const { candidateId, title, description} = req.body;
    try {
        const project = new Project({title, description, candidate: candidateId});
        await project.save()

        await Candidate.findByIdAndUpdate(candidateId, {
            $push: {projects: project._id}
        });
        res.status(201).json(project)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})


//update project status and score
router.patch('/update/:id', async (req,res)=>{
    const { status, score} = req.body;
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, {
            status,
            score,
        });

        const candidate = await Candidate.findById(project.candidate);
        candidate.totalScore += score;
        await candidate.save()
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//get all projects
router.get('/candidate/:id', async (req,res) => {
    try {
        const projects = await Project.find({candidate: req.params.id});
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;
