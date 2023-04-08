import React from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


const Favs = () => {
  const { state } = useContext(ContextGlobal);
  
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.length ? (
        favs.map(fav => (
					<Card 
          key={fav.id} 
          name={fav.name} 
          username={fav.username} 
          id={fav.id}/>
				))): (<h4>No favorites.</h4>
        )}
      </div>
    </div>
  );
};

export default Favs;
