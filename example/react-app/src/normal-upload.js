import React, { useState } from 'react';
import { useUpload } from 'react-uploader';

const NormalUpload = () => {
  let [files, setFiles] = useState();
  let { loading, progress, error } = useUpload(files, {
    path: '/upload',
    name: 'test',
  });

  return (
    <div style={{ marginBottom: 50 }}>
      <div>Normal HTTP upload</div>

      {loading ? (
        <div>Progress: {progress}</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <input type="file" onChange={e => setFiles(e.target.files)} />
      )}
    </div>
  );
};

export default NormalUpload;