module.exports = async (model, list, item) => {
    var index = list.indexOf(item);
    if (index !== -1) {
        list.splice(index, 1);
        await model.save();
    }
}