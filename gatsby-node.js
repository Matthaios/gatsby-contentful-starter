exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type contentfulBlogPost implements Node {
      slug: String
    }
  `;
  createTypes(typeDefs);
};
