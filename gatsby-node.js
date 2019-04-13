exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ContentfulBlogPost implements Node {
      slug: String
    }
  `;
  createTypes(typeDefs);
};
