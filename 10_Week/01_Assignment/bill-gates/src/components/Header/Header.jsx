import PropTypes from "prop-types";

function Header({ budget }) {
  return (
    <header className="text-center my-8 ">
      <h1 className="text-4xl font-bold mb-8 ">Bill Gates&apos; Money!</h1>
      <div className="relative top-0 w-full bg-green-500 p-5 rounded text-2xl font-bold text-gray-100 mb-10">
        <h2 className="sticky top-0 left-0 right-0 m-0 p-0 z-10 ">
          Budget: ${budget.toLocaleString()}
        </h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  budget: PropTypes.number.isRequired,
};

export default Header;
