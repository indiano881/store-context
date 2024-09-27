import { ProductType } from "../../../utils/types";

const ArrowIcon = () => (
    <svg
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );

const CardSingle = ({name, description, image}:ProductType)=> {
    return (
        <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <div>
          <img
            className="w-full h-auto max-w-[550px] max-h-[550px]"
            src={image}
            alt={name}
          />
          <div>
            <h2 >{name}</h2>
            <p>
              {description}
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    )
}

export default CardSingle;