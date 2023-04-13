import { useParams } from 'react-router-dom';

function Post(props) {
  const { postID } = useParams();

  /* TODO: convert this placeholder variable into a useEffect
  component mount hook to fetch data from the backend database
  based on the URL's /post/:id as a basis for the component */
  const fetchedData = {
    postID: postID, // the fetchedData's postID should be based on the URL
    authorUID: '87cxzids989a',
    datePosted: 1681354006526,
    title: 'Functional Versus Object-Oriented Programming',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem praesentium deleniti illum totam omnis expedita explicabo dolores. Quidem, minus accusamus earum temporibus laudantium dolorum, iusto quas voluptas neque facere id tempora possimus ea harum rerum dolor culpa inventore, est repellendus voluptatibus similique iure. Rerum odio beatae nulla assumenda consequatur!',
    tags: ['Programming', 'Computer Science', 'Technology'],
  };
  console.log(fetchedData.postID);

  return <div className="Post">I'm in Post!</div>;
}

export default Post;
