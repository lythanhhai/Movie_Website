import { React, useState } from "react";
import PageForEpisode from "./PageForEpisode";
import "../asset/Film/Film.css";
import "../asset/Film/Film_responsive.css";

const Film = ({ episodes, title }) => {
  const [currentEpisode, setCurretnEpisode] = useState(0);
  const getEpisode = (numberEpisode) => {
    setCurretnEpisode(numberEpisode);
  };
  const a = () => {
    return (
      <div className="episode">
        <iframe
          width={640}
          height={500}
          src={episodes[currentEpisode].url}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay"
          allowFullScreen={true}
        />
        <h3 className="title">
          {title} - tập {episodes[currentEpisode].episode}
        </h3>
      </div>
    );
  };
  var elmEpisodes = episodes.map((episode1, index) => {
    const { episode, url, type } = episode1;
    if (index === currentEpisode) {
      return (
        <div key={index} className="episode">
          <iframe
            src={url}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay"
            allowFullScreen={true}
          />
          <h3 className="title">
            {title} - tập {episode}
          </h3>
        </div>
      );
    }
  });
  return (
    <section className="Film">
      {elmEpisodes}
      <PageForEpisode episodes={episodes} getEpisode={getEpisode} />
    </section>
  );
};

export default Film;
