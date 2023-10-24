module.exports = async (model, list, item) => {
    list.push(item);
    await model.save();
}