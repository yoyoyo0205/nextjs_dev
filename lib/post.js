import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}
