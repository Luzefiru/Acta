/**
 * A module containing the filter algorithms that filter an arrayOfPosts.
 */
const filterPosts = (() => {
  /**
   * @param {Array} arrayOfPosts an array containing objects that hold an article post's metadata
   * @param {Array} arrayOfTags an array containing strings the user used to filter posts by
   * @returns an array containing AT LEAST all the  arrayOfTags
   */
  const byTag = (arrayOfPosts, arrayOfTags) => {
    return [];
  };

  return { byTag };
})();

export default filterPosts;
