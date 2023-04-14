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

/* Sample Array Element

{
  postID: '0000001',
  authorUID: '87cxzids989a',
  datePosted: 1681354006526,
  title: 'Functional Versus Object-Oriented Programming',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem praesentium deleniti illum totam omnis expedita explicabo dolores. Quidem, minus accusamus earum temporibus laudantium dolorum, iusto quas voluptas neque facere id tempora possimus ea harum rerum dolor culpa inventore, est repellendus voluptatibus similique iure. Rerum odio beatae nulla assumenda consequatur!',
  tags: ['Programming', 'Computer Science', 'Technology'],
}

*/
