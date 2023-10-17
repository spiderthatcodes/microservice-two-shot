import React from 'react';

const ShoeRow = ({ shoe, deleteShoe }) => {
    return (
        <tr>
            <td>{shoe.manufacturer}</td>
            <td>{shoe.model_name}</td>
            <td>{shoe.color}</td>
            <td>
                <img
                    src={shoe.image}
                    alt={shoe.model_name}
                    width={30}
                    height={30}
                />
            </td>
            <td>
                <p
                    onClick={() => deleteShoe(shoe.id)}
                    style={{ cursor: 'pointer' }}
                >
                    Delete Shoes
                </p>
            </td>
        </tr>
    );
};

export default ShoeRow;
