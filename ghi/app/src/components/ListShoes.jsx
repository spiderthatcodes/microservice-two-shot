/* eslint-disable no-lone-blocks */
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShoeRow from './ShoeRow';

const ListShoes = () => {
    const [shoes, setShoes] = useState([]);
    const [loadData, setLoadData] = useState(true);

    useEffect(() => {
        const url = 'http://localhost:8080/api/shoes/';
        {
            loadData &&
                axios
                    .get(url)
                    .then(({ data }) => {
                        setShoes(data.shoes);
                        setLoadData(false);
                    })
                    .catch(({ message }) => console.log(message));
        }
    }, [loadData]);

    const deleteShoe = (id) => {
        axios
            .delete(`http://localhost:8080/api/shoes/${id}/`)
            .then(({ data }) => {
                console.log(data);
                setLoadData(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Image</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {shoes.map((shoe, index) => (
                        <ShoeRow
                            shoe={shoe}
                            deleteShoe={deleteShoe}
                            key={index}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListShoes;
