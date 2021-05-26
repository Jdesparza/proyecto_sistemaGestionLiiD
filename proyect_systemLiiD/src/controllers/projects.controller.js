import Projects from '../models/projects';

export async function getProjects(req, res) {
    const projects =  await Projects.findAll();
    try {
        res.json({
            data: projects
        });
    } catch (e) {
        console.log(e);
    }
};

export async function createProjects(req, res) {
    const { projectName, projectOwner, managerName, departaments, developers, states, startDate, finishDate } = req.body;
    try {
        let newProject = await Projects.create({
            projectName, 
            projectOwner, 
            managerName, 
            departaments, 
            developers, 
            states, 
            startDate, 
            finishDate
        }, {
            fields: ['projectName', 'projectOwner', 'managerName', 'departaments', 'developers', 'states', 'startDate', 'finishDate']
        })
        if (newProject) {
            return res.json({
                message: 'Project created success',
                data: newProject
            })
        }
    }catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Somethin goes wrong',
            data: {}
        })
    }
} ;

export async function deleteProjects(req , res) {
    const { projectID } = req.params;
    try {
        const deleteRowCount = await Projects.destroy({
            where: {
                projectID
            }
        });
        res.json({
            message: 'Project deleted succesfully',
            count: deleteRowCount
        })
    } catch (e) {
        console.log(e);
    }
}

export async function updateProjects(req, res) {
    const { projectID } = req.params;
    const { projectName, projectOwner, managerName, departaments, developers, states, startDate, finishDate } = req.body;

    try {
        const projects = await Projects.findAll({
            attributes: ['projectID', 'projectName', 'projectOwner', 'managerName', 'departaments', 'developers', 'states', 'startDate', 'finishDate'],
            where: {
                projectID
            }
        })
    
        if (projects.length > 0) {
            projects.forEach(async projects => {
                await projects.update({
                    projectName, 
                    projectOwner, 
                    managerName, 
                    departaments, 
                    developers, 
                    states, 
                    startDate, 
                    finishDate
                });
            })
        }
    
        return res.json({
            message: 'Project updated successfully',
            data: projects
        })
    } catch (e) {
        console.log(e);
    }
}
