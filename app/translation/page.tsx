import Header from "./components/Header"
import Fetch from "./components/Fetch";
const page: React.FC = () => {
  return (
    <div className="bg-gray-100 h-full sm:p-5 md:p-10">
      <div className="translation-box bg-white h-full sm:p-5 md:p-10 flex flex-col">
        <Header />
        <Fetch />
      </div>
    </div>
  );
}

export default page;