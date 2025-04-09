import Header from "./components/Header"

const page: React.FC = () => {
  return (
    <div className="bg-gray-100 h-full sm:p-5 md:p-10">
      <div className="translation-box bg-white h-full sm:p-5 md:p-10">
        <Header />
      </div>
    </div>
  );
}

export default page;