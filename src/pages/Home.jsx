import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import CreateBlog from "../components/CreateBlog";

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <div>
        <CreateBlog />
        <BlogList onSelect={setSelectedBlog} />
      </div>
      <div className="col-span-2">
        <BlogDetail blogId={selectedBlog} />
      </div>
    </div>
  );
}
