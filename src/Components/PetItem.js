import React, { useState } from "react";
import petsData from "../petsData";

function PetItem({ pet }) {
  const [imge, setImge] = useState(pet.image);
  const changee = () => {
    setImge(pet.image2);
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={imge} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={changee} type="button" className="btn btn-info">
            pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
