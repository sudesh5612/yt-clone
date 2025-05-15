import React, { useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../Context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";

function Home() {
  const { data, loading } = useAuth();
  console.log("Data in Home.jsx:", data); // Check if data is updated in Home.jsx

  useEffect(() => {
    // Ensure `data` is being properly updated in Home.jsx
    if (data.length === 0 && !loading) {
      console.log("No videos found. Check API response.");
    }
  }, [data, loading]);  // Add `data` and `loading` to watch for changes

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems />
        {/* Show loading */}
        {loading ? (
          <div>Loading...</div> // {/* Show a loading spinner or message */}
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {/* Check if data exists and map through it */}
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item) => {
                if (item.type !== "video") return null; // Filter out non-video items
                return (
                  <Video
                    key={item.video?.videoId || item.id || item.title}  // Ensure each video has a unique key
                    video={item?.video}
                  />
                );
              })
            ) : (
              <div>No videos available</div>  //{/* Fallback message when no videos are present */}
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
