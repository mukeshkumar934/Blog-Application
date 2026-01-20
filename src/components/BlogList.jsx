import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api/blogs";
import BlogCard from "./BlogCard";

export default function BlogList({ onSelect }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Error loading blogs</p>;

  return (
    <div className="space-y-3">
      {data.map(blog => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}
    </div>
  );
}
