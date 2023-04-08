import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos) {
      let listaParseada = JSON.parse(favoritos);
      const listaFiltrada = listaParseada.filter(item => item.id !== id);
      const existe = listaFiltrada.length !== listaParseada.length;
      existe ? listaParseada = listaFiltrada : listaParseada.push({name: name, username: username, id: id});
      localStorage.setItem("favoritos", JSON.stringify(listaParseada));
      dispatch({
        type: "FAVS",
        payload: {
          ...state,
          favs: listaParseada
        }
      })
    } else {
      localStorage.setItem("favoritos", JSON.stringify([{name: name, username: username, id: id}]))
      dispatch({
        type: "FAVS",
        payload: {
          ...state,
          favs: [{name: name, username: username, id: id}]
        }
      })
    }
    setFavorito(!favorito)
    setUpdate(!update)
  }

  useEffect(() => {
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos) {
      const lista = JSON.parse(favoritos)
      const cardEncontrada = lista.find(item => item.id === id);
      if (cardEncontrada) {
        setFavorito(true)
      }
    }
  }, [update])
  

  return (
    <div className="card">
       <h2>{name}</h2>
       <h3>{username}</h3>
       <h4>{id}</h4>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
