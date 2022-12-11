module.exports = async (_, {input}, {models}) => {
    newStoryStructure = await models.StoryStructures.create(input);
    return newStoryStructure;
}