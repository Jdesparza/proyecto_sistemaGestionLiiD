import Licenses from '../models/licenses';

export async function getLicenses(req, res) {
    const licenses =  await Licenses.findAll();
    try {
        res.json({
            data: licenses
        });
    } catch (e) {
        console.log(e);
    }
};

export async function createLicenses(req, res) {
    const { deptOwner, licenseType, licenseName, credentials, registerDate, finishDate, datails, DepartmentDeptID } = req.body;
    try {
        let newLicense = await Licenses.create({
            deptOwner,
            licenseType,
            licenseName,
            credentials,
            registerDate, 
            finishDate,
            datails,
            DepartmentDeptID
        }, {
            fields: ['deptOwner', 'licenseType', 'licenseName', 'credentials', 'registerDate', 'finishDate', 'datails', 'DepartmentDeptID']
        })
        if (newLicense) {
            return res.json({
                message: 'License created success',
                data: newLicense
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

export async function deleteLicenses(req , res) {
    const { licenseID } = req.params;
    try {
        const deleteRowCount = await Licenses.destroy({
            where: {
                licenseID
            }
        });
        res.json({
            message: 'License deleted succesfully',
            count: deleteRowCount
        })
    } catch (e) {
        console.log(e);
    }
}

export async function updateLicenses(req, res) {
    const { licenseID } = req.params;
    const { deptOwner, licenseType, licenseName, credentials, registerDate, finishDate, datails, DepartmentDeptID } = req.body;

    try {
        const licenses = await Licenses.findAll({
            attributes: ['licenseID', 'deptOwner', 'licenseType', 'licenseName', 'credentials', 'registerDate', 'finishDate', 'datails', 'DepartmentDeptID'],
            where: {
                licenseID
            }
        })
    
        if (licenses.length > 0) {
            licenses.forEach(async licenses => {
                await licenses.update({
                    deptOwner,
                    licenseType,
                    licenseName,
                    credentials,
                    registerDate, 
                    finishDate,
                    datails,
                    DepartmentDeptID
                });
            })
        }
    
        return res.json({
            message: 'License updated successfully',
            data: licenses
        })
    } catch (e) {
        console.log(e);
    }
}
