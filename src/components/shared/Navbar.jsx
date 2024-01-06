const Navbar = ({ handleNav }) => {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between h-24 max-w-[1240px] mx-auto mb-6 px-4 select-none">
      <h1 className="text-2xl text-[#00df9a] font-black sm:text-5xl 2xl:ml-14">
        MOVIES CRUD
      </h1>
      <button
        className="bg-[#00df9a] rounded-md font-bold py-2 sm:py-4 px-2 flex items-center"
        onClick={handleNav}
      >
        <i className="bx bx-add-to-queue bx-sm mr-1.5"></i>Add Movie
      </button>
    </div>
  );
};

export default Navbar;
