import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";

export default function BlogDetail({ blogId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
    enabled: !!blogId
  });

  if (!blogId) return <p>Select a blog</p>;
  if (isLoading) return <p>Loading blog...</p>;

  return (
    <div>
      <img src={data.coverImage} className="rounded-lg mb-4" />
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.content}</p>
    </div>
  );
}
