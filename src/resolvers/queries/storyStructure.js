module.exports = async (_, __, {models}) => {
  return await models.StoryStructures.find();
};