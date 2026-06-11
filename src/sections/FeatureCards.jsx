import { Link } from "react-router-dom";

const FeatureCards = ({ constant, cols = 3 }) => {
  return (
    <div className="w-full padding-x-lg">
      <div className={`mx-auto grid-${cols}-cols`}>
        {constant.map(({ imgPath, title, desc, link }) => (
          <div
            key={title}
            className="card-border rounded-xl p-6 flex flex-col gap-2"
          >
            {imgPath && (
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={imgPath} />
              </div>
            )}
            <div className="flex items-center gap-2">
              <h3 className="text-white text-2xl font-semibold mt-2">
                {title}
              </h3>
              {link && (
                <Link
                  to={link}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ↗ Built with EVO
                </Link>
              )}
            </div>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
