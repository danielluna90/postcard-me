import Image from "next/image";
import PostCard from "./components/postcard";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <PostCard/>
    </main>
  );
}
