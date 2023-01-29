import { useState } from "react";

export const Images = () => {
  const [images, setImages] = useState([
    {id: "i1", img: "https:/picsum.photos/200"},
    {id: "i2", img: "https:/picsum.photos/200"},
  ]);

  const [newImageUrl, setNewImageUrl] = useState({id: Math.random().toString(), img:"https:/picsum.photos/200"});

  const handleAdd = () => {
    setImages([newImageUrl , ...images]);
    // setNewImageUrl({...newImageUrl, img:""});
  };
  const handleChange = (e) => {
    // console.log({e: e})
    // console.log({target: e.target})
    // console.log({value: e.target.value})
    setNewImageUrl(e.target.value);
  };

  return (
    <div>
      <div className="add">
        <input
          type="text"
          value={newImageUrl.img}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="images">
        {images.map((image, index) => (
          <span key={index} className="img">
            <img src={image.img} width="150" />
          </span>
        ))}
      </div>
    </div>
  );
};
