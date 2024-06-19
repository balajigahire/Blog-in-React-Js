import Button from "./Button";

function Footer() {
  return (
    <footer className="w-full my-10">
      <div className="w-4/5 mx-auto bg-gray-100 p-7 rounded-xl">
        <h2 className="text-3xl">Get inspired with weekly newsletter</h2>
        <div className="w-full mt-5 bg-white p-3 rounded-2xl flex items-center gap-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full h-14 focus:outline-none text-base"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
