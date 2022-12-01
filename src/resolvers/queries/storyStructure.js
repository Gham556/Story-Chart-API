module.exports = async (_, { name }, {models}) => {
  return await models.StoryStructure.find(name);
};