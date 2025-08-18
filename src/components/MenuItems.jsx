import Items from "./Items";
import { v4 as uuid } from "uuid";

const sandwichesArr = [
  {
    key: uuid(),
    name: "Café Twenty Six Special",
    filling: "med/hot spicy chicken - salad - cheddar",
    price: 6.0,
  },
  {
    key: uuid(),
    name: "Chicken / Lamb Shawarma",
    filling: "med/hot spicy - salad ",
    price: 6.0,
  },
  {
    key: uuid(),
    name: "Halloumi Sandwich",
    filling: "halloumi - fried egg - add avocado ",
    price: 6.0,
  },
  {
    key: uuid(),
    name: "Smash Burgers",
    filling: "succulent beef - med/hot spicy ",
    price: 5,
  },
  {
    key: uuid(),
    name: "Falafel Wrap",
    filling: "falafel - salad - tahini sauce",
    price: 5.0,
  },
  {
    key: uuid(),
    name: "Club Sandwich",
    filling: "chicken - lettuce - tomato - mayo ",
    price: 6.0,
  },
  {
    key: uuid(),
    name: "Greek Salad",
    filling:
      " tomatoes, cucumbers, red onion, olives, feta cheese - special dressing ",
    price: 6.0,
  },
];

const specialMeals = [
  {
    key: uuid(),
    name: "Roasted Lamb and Rice w/ Pepper Sauce",
  },
  {
    key: uuid(),
    name: "Lamb Cubes and Okra Rice w/ Tomato Sauce",
  },
  {
    key: uuid(),
    name: "Mixed Grill - Salad & Chips",
  },
  {
    key: uuid(),
    name: "Steak & Chips",
  },
  {
    key: uuid(),
    name: "Spicy Chicken Burger & Chips",
  },
  {
    key: uuid(),
    name: "Creamy Chicken Mushroom & Rice",
  },
  {
    key: uuid(),
    name: "Lentil Soup / Mushroom Soup",
  },
];
const request = [
  {
    key: uuid(),
    name: "Sausage & Egg Breakfast",
    filling: "sausage - egg",
    price: 4.8,
  },
];

export default function MenuItems() {
  return (
    <section className="relative">
      {/* SANDWICHES */}
      <div className="flex font-poppins justify-between bg-neutral-200 text-zinc-900 border border-b-neutral-300 shadow-xl fade-up">
        <h1 className="text-xl m-auto py-1"> Specials</h1>
      </div>
      <div>
        {sandwichesArr.map((sandwich, index) => (
          <Items key={sandwich.key} sandwich={sandwich} index={index} />
        ))}
      </div>

      {/* DAILY SPECIALS MEALS */}
      <div className="flex flex-col font-poppins bg-neutral-200 text-zinc-900 border border-b-neutral-300 shadow-xl fade-up">
        <h1 className="text-xl m-auto py-1"> Daily Special Meals </h1>
        <span className=" border rounded-3xl bg-neutral-300 hover:bg-green-700 hover:text-white transition-all duration-300 px-3 m-auto text-xs text-zinc-900 italic -mt-1 mb-1">
          <a
            href="https://wa.me/447342888171?text=Hi%20Tariq%2C%20what%20is%20today%27s%20special%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find Out Today's Special, Open WhatsApp"
          >
            Send us a message for today's special
          </a>
        </span>
      </div>
      <div>
        {specialMeals.map((item, index) => (
          <Items key={item.key} sandwich={item} index={index} />
        ))}
      </div>
      {/* REQUEST ANY MEALS */}
      <div className="fade-up-delay-x2">
      <div className="flex flex-col font-poppins justify-between bg-neutral-200 text-zinc-900 border border-b-neutral-300 shadow-xl fade-up">
        <h1 className="text-xl m-auto py-1"> Request Any Meal</h1>
        <span className=" border rounded-3xl bg-neutral-300 hover:bg-green-700 hover:text-white transition-all duration-300 px-3 m-auto text-xs text-zinc-900 italic -mt-1 mb-1">
          <a
            href="https://wa.me/447342888171?text=Hi%20Tariq%2C%20could%20I%20request%20a%20specific%20dish%20in%20advance%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Request a Specific Dish"
          >
            Request a dish
          </a>
        </span>
      </div>
      <p
        className="text-xs fade-up-delay opacity-0 text-gray-300 text-center px-1 py-1 bg-zinc-800 border border-b-neutral-300
     "
      >
        Craving something special? From melt-in-your-mouth slow-cooked lamb
        shoulder to the fragrant Maqluba, simply request your dish in advance
        and we’ll prepare it fresh just for you.
      </p>
      <p
        className="allergen fade-up-delay opacity-0 text-gray-300 text-right px-1 py-1 bg-zinc-800 
     "
      >
        * Our food is freshly prepared in small kitchens that handle allergens
        and our coffee counters are busy places, so we can’t guarantee our food
        and drinks are allergen free
      </p>

      </div>
    </section>
  );
}
