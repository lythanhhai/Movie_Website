import { React } from "react";
import "../asset/PageForEpisode/PageForEpisod_respon.css";
import "../asset/PageForEpisode/PageForEpisode.css";

const PageForEpisode = ({ episodes, getEpisode }) => {
  var numberEpisode = episodes.map((episode, index) => {
    return (
      <button
        key={index}
        type="submit"
        className="number__page"
        onClick={() => {
          getEpisode(index);
        }}
      >
        {index + 1}
      </button>
    );
  });
  return <section className="page">{numberEpisode}</section>;
};

export default PageForEpisode;
