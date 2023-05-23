import locationModel from "../Model/locationModel.js";
export const locationData = async (req, res) => {
    const data = req.body;
    const putData = await locationModel(data);

    try {
        const saveData = await putData.save();
        res.status(200).json(saveData);
    } catch (error) {
        console.log(error)
    }
}