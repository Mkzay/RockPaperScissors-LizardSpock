/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const BonusGameMechanism = ({ setBonusScore }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors"];
  const clickSound = new Audio("/Sounds/click.wav");
  const winSound = new Audio("/Sounds/win.wav");
  const loseSound = new Audio("/Sounds/lose.wav");
  const tieSound = new Audio("/Sounds/tie.wav");

  useEffect(() => {
    clickSound.load();
    winSound.load();
    loseSound.load();
    tieSound.load();
  });

  const choiceImages = {
    paper: "/Images/icon-paper.svg",
    scissors: "/Images/icon-scissors.svg",
    rock: "/Images/icon-rock.svg",
    lizard: "/Images/icon-lizard.svg",
    spock: "Images/icon-spock.svg",
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Tie";
    }

    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "lizard" && computerChoice === "spock")
    ) {
      return "User";
    }

    if (
      (userChoice === "rock" && computerChoice === "paper") ||
      (userChoice === "scissors" && computerChoice === "rock") ||
      (userChoice === "paper" && computerChoice === "scissors")
    ) {
      return "Computer";
    }
  };

  const handleUserChoice = (choice) => {
    clickSound.play();
    setUserChoice(choice);
  };

  useEffect(() => {
    if (userChoice) {
      const computerChoice = generateComputerChoice();
      const result = determineWinner(userChoice, computerChoice);
      setResult(result);
      if (result === "User") {
        winSound.play();
        setBonusScore((prevScore) => prevScore + 1);
      } else if (result === "Computer") {
        loseSound.play();
        setBonusScore((prevScore) => prevScore - 1);
      } else {
        tieSound.play();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userChoice]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pt-48 md:pt-20 lg:pt-32">
      {userChoice ? (
        <>
          <div className="flex items-center justify-between gap-20 text-white font-semibold tracking-widest mt-0 mb-20 lg:mb-10">
            <div className="flex flex-col-reverse items-center gap-5">
              <h2>YOU PICKED</h2>
              <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
                <img
                  className="bg-white rounded-full"
                  src={choiceImages[userChoice]}
                  alt={userChoice}
                />
              </div>
            </div>
            <div className="flex flex-col-reverse items-center gap-5">
              <h2>THE HOUSE PICKED</h2>
              <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
                <img
                  className="bg-white rounded-full"
                  src={choiceImages[computerChoice]}
                  alt={computerChoice}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-5 mb-14">
            <h2 className="text-white font-bold text-6xl">
              {result === "User"
                ? "YOU WIN"
                : result === "Computer"
                ? "YOU LOSE"
                : "IT'S A TIE"}
            </h2>
            <button
              className="bg-white rounded-md py-3 px-20 font-semibold text-base tracking-wider text-darkText"
              onClick={() => {
                if (clickSound.readyState >= 3) {
                  clickSound.play();
                }
                setUserChoice(null);
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center bg-[url('Images/bg-pentagon.svg')] bg-no-repeat bg-contain h-80 w-8/12 md:w-5/12 lg:w-3/12">
          <div className="bg-gradient-to-r from-pG1 to-pG2 rounded-full fixed p-2 top-[19.3rem] right-6 md:p-3 md:right-40 md:top-[25rem] lg:right-[29rem] lg:top-72">
            <button className="h-20 w-20 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-paper.svg"
                alt="Paper Icon"
                onClick={() => handleUserChoice("paper")}
              />
            </button>
          </div>
          <div className="bg-gradient-to-r from-sG1 to-sG2 rounded-full fixed p-2 top-56 md:p-3 md:top-72 lg:top-48">
            <button className="h-20 w-20 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-scissors.svg"
                alt="Scissors Icon"
                onClick={() => handleUserChoice("scissors")}
              />
            </button>
          </div>
          <div className="bg-gradient-to-r from-rG1 to-rG2 rounded-full fixed p-2 right-12 bottom-24 md:p-3 md:bottom-56 md:right-48 lg:bottom-10 lg:right-[32rem]">
            <button className="h-20 w-20 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-rock.svg"
                alt="Rock Icon"
                onClick={() => handleUserChoice("rock")}
              />
            </button>
          </div>
          <div className="bg-gradient-to-r from-lG1 to-lG2 rounded-full fixed p-2 left-12 bottom-24 md:p-3 md:bottom-56 md:left-48 lg:bottom-10 lg:left-[32rem]">
            <button className="h-20 w-20 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-lizard.svg"
                alt="Lizard Icon"
                onClick={() => handleUserChoice("lizard")}
              />
            </button>
          </div>
          <div className="bg-gradient-to-r from-spG1 to-spG2 rounded-full fixed p-2 top-[19.3rem] left-6 md:p-3 md:left-40 md:top-[25rem] lg:left-[29rem] lg:top-72">
            <button className="h-20 w-20 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-spock.svg"
                alt="Spock Icon"
                onClick={() => handleUserChoice("spock")}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BonusGameMechanism;
