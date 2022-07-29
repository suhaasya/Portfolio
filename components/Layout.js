import ContentBar from "../components/ContentBar";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen text-graywhite ">
      <Sidebar />

      <ContentBar child={children} />
    </div>
  );
}
