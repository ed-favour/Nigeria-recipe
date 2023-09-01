const InstructionsCard = () => {
  return (
    <div className="text-orange-800 font-mono py-2 m-3">
      <div>
        <h3 className="text-3xl text-center font-extrabold py-5 ">
          Instructions
        </h3>
      </div>
      <div className="w-[700px] m-auto flex flex-col gap-5">
        <div className="flex items-center gap-5 border-orange-800 border-[2px] p-[4px] rounded-xl hover:shadow-md cursor-pointer">
          <p className="font-bold text-[20px] text-orange-800">1</p>
          <p className="font-thin">
            Start by grinding the spices. Add them all together (ataiko, Irugege
            and a cup of crayfish), blend to powder. Blend the pepper as well.
            Wash the dried fish and remove center bones. I used dried catfish.
            This catfish is actually my favorite, it tastes so wonderful in
            soups. You need just one. Pour hot water over it, wash and set
            aside.
          </p>
        </div>
        <div className="flex items-center gap-5 border-orange-800 border-[2px] p-[4px] rounded-xl hover:shadow-md cursor-pointer">
          <p className="font-bold text-[20px] text-orange-800">2</p>
          <p className="font-thin">
            Wash and precook the prawn, use half a cup of water, a seasoning
            cube and a pinch of salt. <br />
            Precook your meat, this is how – Wash properly and use two seasoning
            cubes and a pinch of salt. Cook the meat until it becomes easy to
            chew, and the water is almost dried. Add salt to taste and allow
            another three minutes. Set aside.
          </p>
        </div>
        <div className="flex items-center gap-5 border-orange-800 border-[2px] p-[4px] rounded-xl hover:shadow-md cursor-pointer">
          <p className="font-bold text-[20px] text-orange-800">3</p>
          <p className="font-thin">
            Boil the palm fruit for 20 minutes, pound with a mortar and pestle,
            transfer into a bowl, add water and extract the juice, don’t add too
            much water, you want it thick. You will need about 7-10 cups of that
            palm fruit juice for this soup. It should be thick.
          </p>
        </div>
        <div className="flex items-center gap-5 border-orange-800 border-[2px] p-[4px] rounded-xl hover:shadow-md cursor-pointer">
          <p className="font-bold text-[20px] text-orange-800">4</p>
          <p className="font-thin">
            Use a sieve to strain the extract into your cooked meat. Allow
            boiling for 15 minutes with the pot half-covered. It should be a lot
            thicker now.
          </p>
        </div>
        <div className="flex items-center gap-5 border-orange-800 border-[2px] p-[4px] rounded-xl hover:shadow-md cursor-pointer">
          <p className="font-bold text-[20px] text-orange-800">5</p>
          <p className="font-thin">
            Add the cleaned dried fish, ground (crayfish, ataiko plus irugege),
            oburunbebe stick, ground pepper, and salt to taste. Cover and allow
            another 10 minutes. You can add a little water if it is too thick.
          </p>
        </div>
        <div className="flex items-center gap-5 border-orange-800 border-[2px] p-[4px] rounded-xl hover:shadow-md cursor-pointer">
          <p className="font-bold text-[20px] text-orange-800">6</p>
          <p className="font-thin">
            Add the crushed dried beletientien leaves, precooked prawn,
            periwinkles and one cube of knorr. Stir, cover and allow to simmer
            for 3 minutes. This is how to make the popular banga soup that is
            loved and made by the Deltans.
          </p>
        </div>
        <div className="flex items-center gap-5 border-orange-800 border-[2px] p-[4px] rounded-xl hover:shadow-md cursor-pointer">
          <p className="font-thin px-6">
            Serve with starch, eba or fufu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructionsCard;
