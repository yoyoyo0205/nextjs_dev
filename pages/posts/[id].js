import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getAllPostsData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
