import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 mt-8">
      <h1 className="font-extrabold text-3xl text-center">
        <span className="text-orange-500">
          Empower innovation by building with AI—
        </span>
        transform ideas into intelligent solutions, unlocking potential and
        redefining what's possible in technology
      </h1>
      <p className="text-xl text-center text-gray-500">
        Empower innovation by building with AI— transform ideas into intelligent
        solutions, unlocking potential
      </p>
      <Button className="bg-blue-500">Get Started!</Button>
    </div>
  );
};

export default Hero;
