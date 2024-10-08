export default async function page() {


  const response = await fetch('https://dummyjson.com/posts/1');
  const post = await response.json();

  return (
    <div>
      <main className="px-7 pt-24 text-center">
        <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
        <p className="max-2-[700px]">{post.body}</p>
      </main>
    </div>
  )
}
