export default function BlogCard({ blog, onSelect }) {
  return (
    <div
      onClick={() => onSelect(blog.id)}
      className="border p-4 rounded-lg cursor-pointer hover:bg-gray-100"
    >
      <h2 className="font-bold text-lg">{blog.title}</h2>
      <p className="text-sm text-gray-500">{blog.category}</p>
      <p className="text-sm mt-2">{blog.description}</p>
    </div>
  );
}
