import { uploadSOP } from "../api";

function UploadSOP() {
  const handleUpload = async (e) => {
    if (!e.target.files[0]) return;
    await uploadSOP(e.target.files[0]);
    alert("SOP uploaded successfully");
  };

  return (
    <div>
      <h3>Upload SOP</h3>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}

export default UploadSOP;