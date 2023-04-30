import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

function NextStageButton() {
  const { startNextStage } = useContext(GameContext);

  return (
    <article className="my-4 grid justify-center">
      <div>
        <button
          onClick={startNextStage}
          className="outline outline-2 outline-black rounded p-2 bg-orange-400"
        >
          <span className="font-bold">NEXT STAGE</span>
        </button>
      </div>
    </article>
  );
}

export default NextStageButton;
