import React from "react";

export default function HatRow({ hat, deleteHat }) {
  return (
    <tr>
      <td>{hat.style_name}</td>
      <td>{hat.color}</td>
      <td>{hat.fabric}</td>
      <td>
        <img src={hat.photo_url} alt={hat.style_name} width={30} height={30} />
      </td>
      <td>
        <p onCLick={() => deleteHat(hat.id)} style={{ cursor: "pointer" }}>
          Delete
        </p>
      </td>
    </tr>
  );
}
