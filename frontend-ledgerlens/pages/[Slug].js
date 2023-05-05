import { useRouter } from 'next/router';
 
const Post = () => {
  const router = useRouter();
  const {Slug} = router.query;
 
  return <p>{Slug}</p>;
};
 
export default Post;
