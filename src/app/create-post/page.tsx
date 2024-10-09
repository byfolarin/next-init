import { createPost } from "@/actions/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const { isAuthenticated } = getKindeServerSession();
  
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/create-post");
  }


  return (
    <main className="text-center pt-16">
             <h1 className="text-4xl font-bold mb-5 md:text-5xl">Create Post</h1>

        <form action={createPost}
        className="h-10 space-x-2 mt-10">
           <input
            name="title"
            placeholder="Title for new post"
            className="border rounded px-3 h-full"
            type="text"
            required /> 
           <button className="h-full bg-blue-500 rounded text-white px-5 ">Submit</button>
        </form>
    </main>
  )
}
