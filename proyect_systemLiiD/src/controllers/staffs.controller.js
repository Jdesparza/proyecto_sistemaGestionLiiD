import Staffs from '../models/staffs';

export async function getStaffs(req, res) {
    const staffs =  await Staffs.findAll();
    try {
        res.json({
            data: staffs
        });
    } catch (e) {
        console.log(e);
    }
};

export async function createStaffs(req, res) {
    const { name, career, semester, email, photo, scholarship, rol, phone, joinDate, finishDate, DepartmentDeptID } = req.body;
    try {
        let newStaff = await Staffs.create({
            name, 
            career, 
            semester, 
            email, 
            photo, 
            scholarship, 
            rol, 
            phone, 
            joinDate, 
            finishDate, 
            DepartmentDeptID
        }, {
            fields: ['name', 'career', 'semester', 'email', 'photo', 'scholarship', 'rol', 'phone', 'joinDate', 'finishDate', 'DepartmentDeptID']
        })
        if (newStaff) {
            return res.json({
                message: 'Staff created success',
                data: newStaff
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

export async function deleteStaffs(req , res) {
    const { staffID } = req.params;
    try {
        const deleteRowCount = await Staffs.destroy({
            where: {
                staffID
            }
        });
        res.json({
            message: 'Staff deleted succesfully',
            count: deleteRowCount
        })
    } catch (e) {
        console.log(e);
    }
}

export async function updateStaffs(req, res) {
    const { staffID } = req.params;
    const { name, career, semester, email, photo, scholarship, rol, phone, joinDate, finishDate, DepartmentDeptID } = req.body;

    try {
        const staffs = await Staffs.findAll({
            attributes: ['staffID', 'name', 'career', 'semester', 'email', 'photo', 'scholarship', 'rol', 'phone', 'joinDate', 'finishDate', 'DepartmentDeptID'],
            where: {
                staffID
            }
        })
    
        if (staffs.length > 0) {
            staffs.forEach(async staffs => {
                await staffs.update({
                    name, 
                    career, 
                    semester, 
                    email, 
                    photo, 
                    scholarship, 
                    rol, 
                    phone, 
                    joinDate, 
                    finishDate, 
                    DepartmentDeptID
                });
            })
        }
    
        return res.json({
            message: 'Staff updated successfully',
            data: staffs
        })
    } catch (e) {
        console.log(e);
    }
}
