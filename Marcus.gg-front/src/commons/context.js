import React, {useState, useContext, useEffect} from 'react';
import {getChampionInfo} from "../api/api";

const ChampionContext = React.createContext();

const ChampionContextProvider = ({children}) => {
  const [champions, setChampions ] = useState({});

  useEffect(() =>{
    getChampionInfo().then(res => setChampions(res.data.data))
  },[])

  return (
    <ChampionContext.Provider value={{champions}}>
      {children}
    </ChampionContext.Provider>
  )
};

export const useChampion = (championId) => {
  const { champions } = useContext(ChampionContext);
  console.log(championId);
  return Object.values(champions).filter(champion => {
    if(Number(champion.key)=== championId) {
      return champion
    }
  });
};

export const useChampionId = () => {
  const { champion } = useContext(ChampionContext);
  for(let i  in champion) {
    console.log(champion);
  }
};

export default ChampionContextProvider;
