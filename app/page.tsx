import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

export const revalidate = 5;

const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      nodes {
        title
        content
        uri
        date
      }
    }
  }
`;

export default async function Page() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_POSTS,
  });

  console.log(
    " data ",
    data.posts.nodes.map((item) => item.title)
  );

  return (
    <main>
      {data.posts.nodes.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </main>
  );
}
