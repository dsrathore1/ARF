import model from "../Model/model.js";

export const getData = async (req, res) => {
    try {
        const data = await model.find({});
        res.status(200).json(data);

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const showData = async (req, res) => {
    try {
        const data = await model.find({});
        res.status(200);
        
        res.render("data", {
            data: data
        });

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