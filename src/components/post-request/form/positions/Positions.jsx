import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Positions.module.scss";
const Positions = ({ position, setPosition }) => {
  const vacanciesURL =
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
  const [vacancies, setVacancies] = useState([]);
  useEffect(() => {
    async function getVacancies() {
      setVacancies((await axios.get(vacanciesURL)).data.positions);
    }
    getVacancies();
  }, []);

  return (
    <div className={style.positionsWrap}>
      <div className={style.positionsContent}>
        <h2>Select your position</h2>
        <ul className={style.positions}>
          {vacancies.map((pos) => (
            <li key={pos.id}>
              <div className={style.input}>
                <input
                  checked={position === pos.id}
                  name="position"
                  type={"radio"}
                  value={pos.id}
                  id={`position_id${pos.id}`}
                  onChange={() => {
                    setPosition(pos.id);
                  }}
                />
                <label
                  htmlFor={`position_id${pos.id}`}
                  className={style.outline}
                ></label>
                <label
                  htmlFor={`position_id${pos.id}`}
                  className={style.dot}
                ></label>
              </div>
              <label htmlFor={`position_id${pos.id}`}>{pos.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Positions;
