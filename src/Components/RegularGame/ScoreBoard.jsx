/* eslint-disable react/prop-types */
const ScoreBoard = ({ regularScore }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-between flex-row absolute m-10 top-0 w-11/12 py-3.5 px-3 border-[3px] border-headerOutline rounded-md md:w-10/12 lg:w-6/12 md:py-4 lg:py-3 lg:px-5 ">
        <ul className="flex flex-col text-2xl text-white font-semibold">
          <li>ROCK</li>
          <li className="-mt-3">PAPER</li>
          <li className="-mt-3">SCISSORS</li>
        </ul>
        <ul className="flex flex-col items-center justify-center bg-white py-1.5 px-6 rounded-md md:py-2">
          <li className="text-sm text-scoreText font-bold tracking-wider">
            SCORE
          </li>
          <li className="text-5xl text-darkText font-bold">{regularScore}</li>
        </ul>
      </div>
    </div>
  );
};

export default ScoreBoard;
