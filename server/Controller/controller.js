import model from "../Model/model.js";

export const getData = async (req, res) => {
    try {
        res.render("index");
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const showData = async (req, res) => {
    try {
        const data = await model.find({});
        res.status(200).json(data);

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const postData = async (req, res) => {
    const data = req.body;
    const dataInput = await model(data);

    try {
        await dataInput.save();

        res.status(200);
        res.redirect("/getData");
        console.log(dataInput);
    } catch (error) {
        console.log(error);
    }
}

export const getDataById = async (req, res) => {
    const id = req.body;
    const getDataFromInput = await model.findById(id);
    res.render("getById");
}

export const getById = async (req, res) => {
    const id = req.params.id;
    const getDataFromId = await model.findById(id);
    // console.log(getDataFromId);
    res.json(getDataFromId);
}