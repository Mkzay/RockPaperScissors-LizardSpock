/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const RegularGameMechanism = ({ setRegularScore }) => {
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
      (userChoice === "paper" && computerChoice === "rock")
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
        setRegularScore((prevScore) => prevScore + 1);
      } else if (result === "Computer") {
        loseSound.play();
        setRegularScore((prevScore) => prevScore - 1);
      } else {
        tieSound.play();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userChoice]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pt-48 lg:pt-32 xl:pt-48">
      {userChoice ? (
        <>
          <div className="flex items-center justify-between gap-20 text-white font-semibold tracking-widest mt-20 mb-16">
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
          <div className="flex items-center justify-center flex-col gap-5 mb-40">
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
        <div className="flex flex-col items-center justify-center bg-[url('Images/bg-triangle.svg')] bg-no-repeat bg-contain h-80 w-9/12 md:w-5/12 lg:w-3/12">
          <div className="bg-gradient-to-r from-pG1 to-pG2 rounded-full fixed p-3 top-56 left-8 lg:top-62 lg:left-[27rem] xl:top-[13rem] xl:left-[30rem]">
            <button className="h-24 w-24 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-paper.svg"
                alt="Paper Icon"
                onClick={() => handleUserChoice("paper")}
              />
            </button>
          </div>
          <div className="bg-gradient-to-r from-sG1 to-sG2 rounded-full fixed p-3 top-56 right-8 lg:top-62 lg:right-[27rem] xl:top-[13rem] xl:right-[30rem]">
            <button className="h-24 w-24 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-scissors.svg"
                alt="Scissors Icon"
                onClick={() => handleUserChoice("scissors")}
              />
            </button>
          </div>
          <div className="bg-gradient-to-r from-rG1 to-rG2 rounded-full fixed p-3 bottom-28 lg:bottom-32 xl:bottom-20">
            <button className="h-24 w-24 bg-white rounded-full flex items-center justify-center md:h-28 md:w-28">
              <img
                className="bg-white rounded-full"
                src="/Images/icon-rock.svg"
                alt="Rock Icon"
                onClick={() => handleUserChoice("rock")}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegularGameMechanism;
