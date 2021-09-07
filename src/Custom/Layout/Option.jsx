import React from "react";

const Option = ({ Param }) => {
  let Return = null;

  switch (Param) {
    case "New":
      Return = (
        <>
          <button>
            <i class="fa fa-plus-square" aria-hidden="true"></i>
          </button>
        </>
      );
      break;

    case "Image":
      Return = (
        <>
          <button>
            <ion-icon name="image"></ion-icon>
          </button>
        </>
      );
      break;

    case "Style":
      Return = (
        <>
          <button>
            <i class="fa fa-bold" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-italic" aria-hidden="true"></i>
          </button>
        </>
      );
      break;

    case "Align":
      Return = (
        <>
          <button>
            <i class="fa fa-align-left" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-align-center" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-align-right" aria-hidden="true"></i>
          </button>
        </>
      );
      break;

    case "Color":
      Return = (
        <>
          {[
            "red",
            "blue",
            "yellow",
            "green",
            "purple",
            "brown",
            "crimson",
            "chartreuse",
          ].map((record) => (
            <div style={{ background: record }} />
          ))}
        </>
      );
      break;

    case "Size":
      Return = (
        <>
          <select name="Size" id="">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="72">72</option>
          </select>
        </>
      );
      break;

    default:
      break;
  }
  return Return;
};

export default Option;
