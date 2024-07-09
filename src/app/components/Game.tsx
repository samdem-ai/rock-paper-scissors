"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import * as types from "@/types";
import WeaponComponent from "./Weapon";
import { ScoreContext } from "@/contexts/contexts";

const WINS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const Game = () => {
  const weapons: types.Weapon[] = [
    {
      name: "paper",
      imageLink: "/images/icon-paper.svg",
      gradientFrom: "from-[#4865f4]",
      gradientTo: "to-[#5671f5]",
    },
    {
      name: "scissors",
      imageLink: "/images/icon-scissors.svg",
      gradientFrom: "from-[#ec9e0e]",
      gradientTo: "to-[#eca922]",
    },
    {
      name: "rock",
      imageLink: "/images/icon-rock.svg",
      gradientFrom: "from-[#dc2e4e]",
      gradientTo: "to-[#dd405d]",
    },
  ];

  const [chosenWeapon, setChosenWeapon] = useState<types.Weapon>(weapons[0]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [win, setWin] = useState<-1 | 0 | 1 | 999>(999);
  const [botWeapon, setBotWeapon] = useState<types.Weapon>(weapons[0]);
  const [housePicked, setHousePicked] = useState<boolean>(false);
  const scoreContext = useContext(ScoreContext);
  const handleChooseWeapon = (weapon: types.Weapon) => {
    setChosenWeapon(weapon);
    setGameStarted(true);
    setTimeout(() => {
      const botChoice = Math.floor(Math.random() * weapons.length);
      setBotWeapon(weapons[botChoice]);
      if (weapon.name === weapons[botChoice].name) {
        setWin(0);
      } else if (WINS[weapon.name] === weapons[botChoice].name) {
        setWin(1);
        scoreContext?.setScore((prev) => prev + 1);
      } else {
        setWin(-1);
        scoreContext?.setScore((prev) => prev - 1);
      }
      setHousePicked(true);
    }, 1000);
  };
  return !gameStarted ? (
    <div
      style={{ backgroundImage: 'url("/images/bg-triangle.svg")' }}
      className="w-full h-[50vh] bg-no-repeat bg-center flex flex-col gap-[2.5rem] justify-center items-center"
    >
      <div className="flex flex-wrap justify-center max-w-[500px] gap-x-[4rem] gap-y-[3rem]">
        {weapons.map((weapon) => (
          <WeaponComponent
            key={weapon.name}
            weapon={weapon}
            size={59}
            handleChooseWeapon={handleChooseWeapon}
            disabled={false}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-[5.5rem]">
        <div className="flex flex-col items-center gap-7">
          <WeaponComponent
            weapon={chosenWeapon}
            size={59}
            disabled={true}
            className={`${win === 1 ? "shadow-effect" : ""}`}
          />
          <h2 className="text-white font-bold text-[1em]">YOU PICKED</h2>
        </div>
        <div className="flex flex-col items-center gap-7">
          <button
            className={`${housePicked ? "hidden" : ""} rounded-full animated-background p-12`}
          >
            <div className="w-[59px] h-[59px]" />
          </button>
          <WeaponComponent
            weapon={botWeapon}
            size={59}
            disabled={true}
            className={`${!housePicked ? "hidden" : ""} ${win === -1 ? "shadow-effect" : ""}`}
          />
          <h2 className="text-white font-bold text-[1.1em]">
            THE HOUSE PICKED
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1
          className={`${win != -1 ? "hidden" : ""} w-fit text-white font-black text-[3rem] pb-4`}
        >
          YOU LOSE
        </h1>
        <h1
          className={`${win != 1 ? "hidden" : ""} w-fit text-white font-black text-[3rem] pb-4`}
        >
          YOU WIN
        </h1>
        <h1
          className={`${win != 0 ? "hidden" : ""} w-fit text-white font-black text-[3rem] pb-4`}
        >
          DRAW
        </h1>
        <button
          className={`border-2 border-white rounded-xl px-12 py-3 bg-white text-black font-bold text-xl transition-all ${win === -1 ? "hover:text-red-500" : "hover:text-blue-500"} ${!housePicked ? "hidden" : ""}`}
          onClick={() => {
            setGameStarted(false);
            setHousePicked(false);
            setWin(999);
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Game;
