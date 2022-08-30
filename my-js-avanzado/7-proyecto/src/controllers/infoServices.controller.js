import {getConnection} from "../commons/Connection"

const getInfoServices = async (req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM InfoServices");
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const getById = async (req, res) =>{
    try{
        const { idInstitucion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM InfoServices WHERE idInstitucion = ?", idInstitucion);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const addInfoService = async (req, res) =>{
    try{
        const { idInstitucion, name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio } = req.body;
        if (idInstitucion === undefined || name === undefined || modalidad === undefined || estado === undefined|| direccion === undefined|| telefono === undefined || horario=== undefined || webredesSociales=== undefined || servicio=== undefined){
            res.status(400).json({message:"Bad Request. Please fill all field."})
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO `InfoServices`(`idInstitucion`, `name`, `modalidad`, `estado`, `direccion`, `telefono`, `horario`, `webredesSociales`, `servicio` ) VALUES (?,?,?,?,?,?,?,?,?)", [idInstitucion, name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio]);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const updateInfoService = async (req, res) =>{
    try{
        const {idInstitucion} = req.params;
        const { name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio } = req.body;
        if ( name === undefined || modalidad === undefined || estado === undefined|| direccion === undefined|| telefono === undefined || horario=== undefined || webredesSociales=== undefined || servicio=== undefined){
            res.status(400).json({message:"Bad Request. Please fill all field."})
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE InfoServices SET `name`= ?,`modalidad`=?,`estado`=?,`direccion`=?, `telefono`=?, `horario`=?, `webredesSociales`=?, `servicio`=?, WHERE idInstitucion= ?", [idInstitucion, name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio]);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const deleteInfoService = async (req, res) =>{
    try{
        const {idInstitucion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM InfoServices WHERE idInstitucion= ?", idInstitucion);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getInfoServices,
    getById,
    addInfoService,
    updateInfoService,
    deleteInfoService

}