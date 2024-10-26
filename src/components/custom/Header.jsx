import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img className="w-10 h-10" src="/voice.svg" />
      <div>
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default Header;
