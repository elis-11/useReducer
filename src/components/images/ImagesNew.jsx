import { useState } from "react";

export const ImagesNew = () => {
  const [images, setImages] = useState([
    "https:/picsum.photos/id/56/200",
    "https:/picsum.photos/id/53/200",
    "https://picsum.photos/seed/100/100"
  ]);

//   const [newImageUrl, setNewImageUrl] = useState({id: Math.random().toString(), img:"https:/picsum.photos/200"});
  const [newImageUrl, setNewImageUrl] = useState("");
//   const [newImageUrl, setNewImageUrl] = useState("");

  const handleAdd = () => {
    setImages([newImageUrl , ...images]);
    setNewImageUrl("");
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
          value={newImageUrl}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="images">
        {images.map((image, index) => (
          <span key={index} className="img">
            <img src={image} width="150" />
          </span>
        ))}
      </div>
    </div>
  );
};
