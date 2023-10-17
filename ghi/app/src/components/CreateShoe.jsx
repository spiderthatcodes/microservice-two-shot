import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateShoe = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [style, setStyle] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [bins, setBins] = useState([]);
    const [bin, setBin] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:8100/api/bins/')
            .then(({ data }) => setBins(data.bins))
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newShoe = {
            manufacturer: manufacturer,
            model_name: style,
            color: color,
            image: image,
        };
        axios
            .post(`http://localhost:8080/api/bins/${bin}/shoes/`, newShoe)
            .then(() => {
                navigate('/list-shoes')
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='offset-3 col-6'>
                    <div className='shadow p-4 mt-4'>
                        <h1>Create a new conference</h1>
                        <form
                            onSubmit={handleSubmit}
                            id='create-conference-form'
                        >
                            <div className='form-floating mb-3'>
                                <input
                                    onChange={(e) =>
                                        setManufacturer(e.target.value)
                                    }
                                    value={manufacturer}
                                    placeholder='Manufacturer...'
                                    required
                                    type='text'
                                    id='manufacturer'
                                    name='manufacturers'
                                    className='form-control'
                                />
                                <label htmlFor='max_presentations'>
                                    Manufacturer
                                </label>
                            </div>

                            <div className='form-floating mb-3'>
                                <input
                                    onChange={(e) => setStyle(e.target.value)}
                                    value={style}
                                    placeholder='Style...'
                                    required
                                    type='text'
                                    id='style'
                                    name='style'
                                    className='form-control'
                                />
                                <label htmlFor='max_presentations'>Style</label>
                            </div>

                            <div className='form-floating mb-3'>
                                <input
                                    onChange={(e) => setColor(e.target.value)}
                                    value={color}
                                    placeholder='Color...'
                                    required
                                    type='text'
                                    id='color'
                                    name='color'
                                    className='form-control'
                                />
                                <label htmlFor='max_attendees'>Color</label>
                            </div>

                            <div className='form-floating mb-3'>
                                <input
                                    onChange={(e) => setImage(e.target.value)}
                                    value={image}
                                    placeholder='Image URL...'
                                    required
                                    type='text'
                                    id='image'
                                    name='image'
                                    className='form-control'
                                />
                                <label htmlFor='max_attendees'>Image URL</label>
                            </div>

                            <div className='mb-3'>
                                <select
                                    onChange={(e) => setBin(e.target.value)}
                                    value={bin}
                                    required
                                    id='location'
                                    name='location'
                                    className='form-select'
                                >
                                    <option>Choose a bin</option>
                                    {bins.map((bin, index) => (
                                        <option
                                            key={index}
                                            value={bin.id}
                                        >
                                            {bin.closet_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button className='btn btn-primary'>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateShoe;
