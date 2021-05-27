import Staff_Projects from '../models/staff_projects';

export async function getStaff_Projects(req, res) {
    const staff_projects =  await Staff_Projects.findAll();
    try {
        res.json({
            data: staff_projects
        });
    } catch (e) {
        console.log(e);
    }
};

export async function createStaff_Projects(req, res) {
    const { StaffStaffID, ProjectProjectID } = req.body;
    try {
        let newStaff_Project = await Staff_Projects.create({
            StaffStaffID, 
            ProjectProjectID
        }, {
            fields: ['StaffStaffID', 'ProjectProjectID']
        })
        if (newStaff_Project) {
            return res.json({
                message: 'Staff_Project created success',
                data: newStaff_Project
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

export async function deleteStaff_Projects(req , res) {
    const { staff_ProjectID } = req.params;
    try {
        const deleteRowCount = await Staff_Projects.destroy({
            where: {
                staff_ProjectID
            }
        });
        res.json({
            message: 'Staff_Project deleted succesfully',
            count: deleteRowCount
        })
    } catch (e) {
        console.log(e);
    }
}

export async function updateStaff_Projects(req, res) {
    const { staff_ProjectID } = req.params;
    const { StaffStaffID, ProjectProjectID } = req.body;

    try {
        const staff_projects = await Staff_Projects.findAll({
            attributes: ['staff_ProjectID', 'StaffStaffID', 'ProjectProjectID'],
            where: {
                staff_ProjectID
            }
        })
    
        if (staff_projects.length > 0) {
            staff_projects.forEach(async staff_projects => {
                await staff_projects.update({
                    StaffStaffID, 
                    ProjectProjectID
                });
            })
        }
    
        return res.json({
            message: 'Staff_Project updated successfully',
            data: staff_projects
        })
    } catch (e) {
        console.log(e);
    }
}
