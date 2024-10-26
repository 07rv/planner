import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Trip = () => {
  return (
    <div className="sm:px-10 md:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Empower innovation by building with AI— transform ideas into intelligent
        solutions, unlocking potential
      </p>

      <div className="mt-12">
        <div>
          <h2 className="text-xl my-3 font-medium">What is your search?</h2>
          <GooglePlacesAutocomplete apiKey="****" />
        </div>
      </div>
    </div>
  );
};

export default Trip;
