import Link from "next/link";


export default async function Page() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All Posts</h1>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  ); 
}