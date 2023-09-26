import React, { ChangeEvent, useState } from "react";
import axios from "axios";

export const Upload = () => {
  /**
   * The user would have to click on a "Browse" button, select the THERM001 file which will be a JSON, and press a "Send" button.
   */
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        baseURL: "http://localhost:3001",
      });

      setSuccess(true);
      setFile(null);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>Upload</h1>
      <p>
        The user would have to click on a "Browse" button, select the THERM001
        file, and press a "Send" button.
      </p>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Send</button>
      </div>
      {error && <p>{error}</p>}
      {success && <p>Success!</p>}
    </div>
  );
};
