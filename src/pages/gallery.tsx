import { useSession } from "next-auth/react";
import { useEffect } from "react";

const GalleryPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("Session data:", session); // Log session data to console
  }, [session]);

  return (
    <div className="bg-black text-[#facc15] min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="gallery-images">
        <img src="/images/photo 4.jpg" alt="Gallery Photo 4" className="gallery-image" />
      </div>

       {/* Debugging: Display session email for verification */}
       <div>Session email: {session?.user?.email || "No email found"}</div>

      {session?.user?.email === "malckieboothke@gmail.com" && (
        <button className="mt-4 bg-[#facc15] text-black px-4 py-2 rounded">
          Add Image
        </button>
      )}
    </div>
  );
};

export default GalleryPage;











//<div>
           // <input type="file" onChange={handleFileChange} />
            //<button onClick={handleUpload} disabled={isUploading}>
            //  {isUploading ? 'Uploading...' : 'Upload'}
            // </button>
          //  {uploadStatus && <p>{uploadStatus}</p>}
         // </div>