function Button({ children, onClick }) {
  return (
    <button className="w-56 h-10 bg-red-500 rounded-full text-sm text-white font-semibold">
      {children}
    </button>
  );
}

export default Button;
