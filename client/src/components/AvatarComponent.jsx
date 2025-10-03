import { useEffect, useState } from "react";

function AvatarComponent() {
  const [avatarImage, setAvatarImage] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://testingbot.com/free-online-tools/random-avatar/300"
        );
        const generatedAvatar = await res.json();
        setAvatarImage(generatedAvatar);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <img alt="player avatar" src={avatarImage} />
      <h4>player 1</h4>
    </div>
  );
}

export default AvatarComponent;
