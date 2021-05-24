import Departments from '../models/departments';

export async function getDepartments(req, res) {
    const departments =  await Departments.findAll();
    try {
        res.json({
            data: departments
        });
    } catch (e) {
        console.log(e);
    }
};

export async function createDepartments(req, res) {
    const { deptName } = req.body;
    try {
        let newDepartment = await Departments.create({
            deptName
        }, {
            fields: ['deptName']
        })
        if (newDepartment) {
            return res.json({
                message: 'Department created success',
                data: newDepartment
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

export async function deleteDepartments(req , res) {
    const { deptID } = req.params;
    try {
        const deleteRowCount = await Departments.destroy({
            where: {
                deptID
            }
        });
        res.json({
            message: 'Department deleted succesfully',
            count: deleteRowCount
        })
    } catch (e) {
        console.log(e);
    }
}

export async function updateDepartments(req, res) {
    const { deptID } = req.params;
    const { deptName } = req.body;

    try {
        const departments = await Departments.findAll({
            attributes: ['deptID', 'deptName'],
            where: {
                deptID
            }
        })
    
        if (departments.length > 0) {
            departments.forEach(async departments => {
                await departments.update({
                    deptName
                });
            })
        }
    
        return res.json({
            message: 'Department updated successfully',
            data: departments
        })
    } catch (e) {
        console.log(e);
    }
}