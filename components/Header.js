export default function Header() {
  return (
    <header className="flex justify-center content-center bg-white dark:bg-dark-blue py-6">
      <div className="flex justify-between w-11/12">
        <h1 className="sm:text-xl font-extrabold cursor-default">
          Where in the world?
        </h1>
        <button
          className="flex items-center font-semibold"
          onClick={() => {
            let element = document.body;
            element.classList.toggle("dark");
          }}
        >
          <span className="material-symbols-outlined mr-3">dark_mode</span>
          Dark Mode
        </button>
      </div>
    </header>
  );
}
