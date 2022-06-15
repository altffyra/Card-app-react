import React from "react";
import { useNavigate } from "react-router-dom";

function CardForm(props) {
  const addCard = props.addCard;
  let tempsave = {};
  const navigate = useNavigate();

  function applyCard(event) {
    event.preventDefault();
    const inputFeilds = document.querySelectorAll("input");
    const validInputs = Array.from(inputFeilds).filter(
      (input) => input.value !== ""
    );
    if (validInputs.length <= 3) {
      alert("Fields are empty!");
    } else {
      tempsave.key = props.allCards.length;
      const allArrayTwo = [...props.allCards];
      allArrayTwo.push(tempsave);
      addCard(allArrayTwo);
      navigate("/");
    }
  }

  function updateFormVendor(event) {
    tempsave.bank = event.target.value;
    if (event.target.value == "bitcoin") {
      tempsave.color = "#FFAE34";
      tempsave.textcolor = "#000000";
    } else if (event.target.value == "ninja") {
      tempsave.color = "#222222";
      tempsave.textcolor = "#FFFFFF";
    } else if (event.target.value == "blockchain") {
      tempsave.color = "#8B58F9";
      tempsave.textcolor = "#FFFFFF";
    } else if (event.target.value == "evilcorp") {
      tempsave.color = "#F33355";
      tempsave.textcolor = "#FFFFFF";
    }
  }

  function updateFormCcv(event) {
    tempsave.ccv = event.target.value;
  }

  function updateFormCardnumber(event) {
    let temptempnumber = event.target.value;
    let tempnumber = temptempnumber.toString().replace(/\d{4}(?=.)/g, "$& ");
    tempsave.cardnumber = tempnumber;
  }

  function updateFormName(event) {
    let tempname = event.target.value;
    tempsave.cardholder = tempname.toUpperCase();
  }

  function updateFormValid(event) {
    let temptempnumber = event.target.value;
    let tempnumber = temptempnumber.toString().replace(/\d{2}(?=.)/g, "$&/");
    tempsave.valid = tempnumber;
  }

  return (
    <form>
      <p className="small">CARD NUMBER</p>
      <input
        id="cardnumberElem"
        onChange={updateFormCardnumber}
        type="text"
        maxLength="16"
      ></input>
      <p className="small">CARDHOLDER NAME</p>
      <input
        onKeyUp={updateFormName}
        type="text"
        maxLength="19"
        minLength="5"
      ></input>
      <section className="credentials">
        <section className="credentials-1">
          <p className="small">VALID THRU</p>
          <input onChange={updateFormValid} type="text" maxLength="4"></input>
        </section>

        <section className="credentials-2">
          <p className="small">CCV</p>
          <input onChange={updateFormCcv} type="text" maxLength="3"></input>
        </section>
      </section>
      <p className="small">VENDOR</p>
      <select onClick={updateFormVendor} id="vendors" name="vendors">
        <option value=""></option>
        <option value="bitcoin">Bitcoin INC</option>
        <option value="ninja">Ninja Bank</option>
        <option value="blockchain">BLOCK CHAIN INC</option>
        <option value="evilcorp">EVIL CORP</option>
      </select>

      <button className="AddNewCardConfirm" onClick={applyCard}>
        {" "}
        ADD CARD
      </button>
    </form>
  );
}

export default CardForm;
