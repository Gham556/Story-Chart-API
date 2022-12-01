module.exports = async (_, { name }, {models}) => {
    return await models.Structure.find(name);
  };