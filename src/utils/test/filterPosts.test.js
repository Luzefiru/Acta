import filterPosts from '../filterPosts.js';

const sampleData = [
  {
    postID: '0000001',
    authorUID: '87cxzids989a',
    datePosted: 1681354006526,
    title: 'Functional Versus Object-Oriented Programming',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem praesentium deleniti illum totam omnis expedita explicabo dolores. Quidem, minus accusamus earum temporibus laudantium dolorum, iusto quas voluptas neque facere id tempora possimus ea harum rerum dolor culpa inventore, est repellendus voluptatibus similique iure. Rerum odio beatae nulla assumenda consequatur!',
    tags: ['Programming', 'Computer Science', 'Technology'],
  },
  {
    postID: '0000002',
    authorUID: '948912adskjq',
    datePosted: 1681357406491,
    title: 'Decoding CIDR Notation: The Secret of Subnets',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem dolorem dolor et modi fugiat laudantium dolorum expedita provident accusantium deserunt deleniti, iusto inventore facilis quia? Eum aliquid repellat assumenda, sapiente dolore eligendi voluptatibus mollitia, voluptates, quia quo temporibus. Odio, veritatis!',
    tags: ['Network Engineering', 'Computer Science', 'Technology'],
  },
  {
    postID: '0000003',
    authorUID: '123090czjpas',
    datePosted: 1683157406789,
    title: 'The New iPhone 15 Leaks: No Volume Rockers?!',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis in illum commodi ut blanditiis dicta ex iste eveniet. Dolorem dignissimos, culpa corrupti, ratione at nam recusandae nemo totam obcaecati facilis repudiandae temporibus neque. Commodi mollitia ipsa veritatis alias quidem similique quam amet eius quisquam inventore maiores voluptatibus architecto aliquid, nisi hic consequatur quia! Nulla soluta rerum saepe. Ducimus, minima laborum?',
    tags: ['News', 'Mobile', 'Technology'],
  },
];

describe('The filterPosts module', () => {
  it('should have a filterPosts.byTag method', () => {
    expect(filterPosts.byTag).toBeTruthy();
  });

  it('should return an object.', () => {
    expect(typeof filterPosts.byTag(sampleData, [])).toBe('object');
  });

  it('should return all the sampleData if no filterTags are passed.', () => {
    expect(filterPosts.byTag(sampleData, [])).toEqual(sampleData);
  });

  it("should return null if the passed tag does not match any of the array's posts' tags", () => {
    expect(filterPosts.byTag(sampleData, ['Nonexistent Tag'])).toBe(null);
  });

  it('should return all the sampleData if {tags} includes "Technology".', () => {
    expect(filterPosts.byTag(sampleData, ['Technology'])).toEqual(sampleData);
  });

  it('should return the post with {postID} "0000003" if we filter by "News"', () => {
    expect(filterPosts.byTag(sampleData, ['Technology'])).toEqual(
      sampleData[2]
    );
  });

  it('should return the post with {postID} "0000002" if we filter by "Network Engineering"', () => {
    expect(filterPosts.byTag(sampleData, ['Network Engineering'])).toEqual(
      sampleData[2]
    );
  });

  it('should return the posts with {postID} "0000001" & "0000002" we filter by "Computer Science"', () => {
    expect(filterPosts.byTag(sampleData, ['Technology'])).toEqual(
      sampleData.slice(0, 2)
    );
  });
});
