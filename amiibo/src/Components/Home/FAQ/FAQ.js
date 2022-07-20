import React, { useState } from "react";
import { usePanels, ExpansionPanel } from "@react-md/expansion-panel";
import { Typography } from "@react-md/typography";
import { Grid } from "@react-md/utils";
import "./faq.css";

const FAQ = () => {
  const [[panelProps]] = usePanels({ idPrefix: "single-panel", count: 1 });
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="faq-cont">
      <h1>FAQ</h1>
      <Grid columns={1}>
        <ExpansionPanel {...panelProps} header="What does Amiibo do?">
          <Typography>
            is sculpted to look like a character from a video game and includes
            a hidden radio frequency identification (RFID) chip. When a player
            scans the RFID chip inside an amiibo with a compatible Nintendo
            system, the system recognizes which amiibo it is and acts
            accordingly
          </Typography>
        </ExpansionPanel>
        <ExpansionPanel
          id="single-panel-own-props"
          expanded={expanded}
          onExpandClick={() => setExpanded(!expanded)}
          header="What game can use Amiboo?"
        >
          <Typography>
            Only Mario, Luigi, Yoshi, Peach, Donkey Kong, Link, Kirby, Captain
            Falcon, Samus, and Fox McCloud amiibos are currently compatible.
            Head to page two for amiibo compatibility details. Six new amiibos
            are on the way to coincide with the release of Mario Party 10
          </Typography>
        </ExpansionPanel>
        <ExpansionPanel
          id="single-panel-own-props"
          expanded={expanded}
          onExpandClick={() => setExpanded(!expanded)}
          header="Do amiibos work on all game?"
        >
          <Typography>
            Do you have to have an amiibo figure in order to play
            amiibo-compatible games? You can still play all amiibo-compatible
            games without using an amiibo figure. Using an amiibo figure is
            optional and will simply add new elements to the gameplay (depending
            on the game).
          </Typography>
        </ExpansionPanel>
        <ExpansionPanel
          id="single-panel-own-props"
          expanded={expanded}
          onExpandClick={() => setExpanded(!expanded)}
          header="Are amiibos card worth it?"
        >
          <Typography>
            These Animal Crossing Amiibo cards are great and very useful in New
            Horizons as you are able to invite them to your campsite and then
            into your Village to live. It's a good way to control who you have
            living in your town.
          </Typography>
        </ExpansionPanel>
      </Grid>
    </div>
  );
};

export default FAQ;
