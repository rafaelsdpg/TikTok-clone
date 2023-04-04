import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function videoFooter({name, description, music, musica}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <h3>{description}</h3>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter_icon" />
          <div className="videoFooter__musicText">
            <p>{musica} {music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem do disco girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default videoFooter;
