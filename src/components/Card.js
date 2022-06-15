import React from "react";
import logo from "../assets/chip-light.svg";
import BTC from "../assets/vendor-bitcoin.svg";
import NINJA from "../assets/vendor-ninja.svg";
import EVIL from "../assets/vendor-evil.svg";
import BLOCKCHAIN from "../assets/vendor-blockchain.svg";

export default function Card(props) {
  let { topCard } = props;

  let icon = "";
  if (topCard.bank == "bitcoin") {
    icon = BTC;
  } else if (topCard.bank == "ninja") {
    icon = NINJA;
  } else if (topCard.bank == "blockchain") {
    icon = BLOCKCHAIN;
  } else if (topCard.bank == "evilcorp") {
    icon = EVIL;
  }

  return (
    <section className="mainCard">
      <section
        className="card"
        style={{ backgroundColor: topCard.color, color: topCard.textcolor }}
      >
        <section className="chip">
          <img src={logo}></img>
          <img src={icon}></img>
        </section>
        <section className="bankOnCard"> </section>
        <h3>{topCard.cardnumber}</h3>

        <section className="credentials">
          <section className="credentials-1">
            <p className="small">CARDHOLDER NAME</p>
            <h2>{topCard.cardholder}</h2>
          </section>

          <section className="credentials-2">
            <p className="small">VALID THRU</p>
            <h2 className="small">{topCard.valid}</h2>
          </section>
        </section>
      </section>
    </section>
  );
}
