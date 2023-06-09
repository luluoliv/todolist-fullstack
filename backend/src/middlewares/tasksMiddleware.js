const validateTitle = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        return res
            .status(400)
            .json({ message: 'The field "title" is require' });
    }

    if (body.title === "") {
        return res.status(400).json({ message: "title cannot be empty" });
    }

    next();
};

const validateStatus = (req, res, next) => {
    const { body } = req;

    if (body.status === undefined) {
        return res
            .status(400)
            .json({ message: 'The field "status" is require' });
    }

    if (body.status === "") {
        return res.status(400).json({ message: "status cannot be empty" });
    }

    next();
};

module.exports = {
    validateTitle,
    validateStatus
};
