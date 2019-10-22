import { combineReducers } from "redux";

const songs = _ => {
  return [
    { title: "bad guy", duration: "3:14", id: "DyDfgMOUjCI" },
    { title: "xanny", duration: "4:04", id: "GbjwfQG_N_Y" },
    {
      title: "you should see me in a crown",
      duration: "3:01",
      id: "Ah0Ys50CqO8"
    },
    { title: "bury a friend", duration: "3:13", id: "HUHC9tYz8ik" }
  ];
};

const selectedSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;

  return selectedSong;
};

export default combineReducers({ songs, selectedSong });
