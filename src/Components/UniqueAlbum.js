import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UniqueAlbum.css';

export default function UniqueAlbum() {
    // States to get the values
    const [myData, setData] = useState([]);
    const [edit, setEdit] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');

    // useParams for dynamically routing the id
    const { id } = useParams();

    // useEffect for Fetching the Data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    // filtered the Data of Array containing Album Data
    const filteredData = myData.filter((item) => item.userId == id);

    // functionality for deleting items
    function deleteItems(itemId) {
        setData(myData.filter((item) => item.id !== itemId));
    }

    // functionality for updating items

    function updateItems(itemId) {
        setEdit(itemId);
    }

    // functionality for Saving updated items
    function saveData() {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === edit ? { ...item, title: editedTitle } : item
            )
        );
        setEdit();
    }

    return (
        // JSX for Album List
        <div className="main">
            <div className="container">
                {filteredData.map((item, index) => (
                    <div key={item.id} className="displayed">
                        <div className="number">{index + 1}</div>
                        {edit === item.id ? (
                            <div>
                                {/* input Field for updating values */}
                                <input
                                    placeholder="Add Your Inputs"
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                />
                                <button onClick={saveData}>Save</button>
                            </div>
                        ) : (
                            <div className='titles'>
                                {/* Album Title */}
                                <div className="title">{item.title}</div>
                            </div>
                        )}
                        <div className='btns'>
                            {/* Buttons for Upating and deleting */}
                            <button onClick={() => updateItems(item.id)} className='update'>Update</button>
                            <button onClick={() => deleteItems(item.id)} className='delete'>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
