module.exports = async (_, { name }, {models}) => {
    return await models.Theme.find(name);
  };