import "./emoji.css"
import React, { useState } from "react";

const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const emojis = [
    { emoji: "😀", name: "grinning face" },
    { emoji: "😁", name: "grinning face with smiling eyes" },
    { emoji: "😂", name: "face with tears of joy" },
    { id: 41, emoji: '😰', name: 'Face with Open Mouth and Cold Sweat' },
    { id: 42, emoji: '😱', name: 'Face Screaming in Fear' },
    { id: 43, emoji: '😲', name: 'Astonished Face' },
    { id: 44, emoji: '😳', name: 'Flushed Face' },
    { id: 45, emoji: '🤩', name: 'Star-Struck' },
    { id: 46, emoji: '🥺', name: 'Pleading Face' },
    { id: 47, emoji: '🤢', name: 'Nauseated Face' },
    { id: 48, emoji: '🤮', name: 'Face Vomiting' },
    { id: 49, emoji: '🥰', name: 'Smiling Face with Hearts' },
    { id: 50, emoji: '🤯', name: 'Exploding Head' },
    { id: 51, emoji: '🥴', name: 'Woozy Face' },
    { id: 52, emoji: '🤭', name: 'Face with Hand Over Mouth' },
    { id: 53, emoji: '🥳', name: 'Partying Face' },
    { id: 54, emoji: '🤫', name: 'Shushing Face' },
    { id: 55, emoji: '🤡', name: 'Clown Face' },
    { id: 56, emoji: '🥶', name: 'Cold Face' },
    { id: 57, emoji: '🥵', name: 'Hot Face' },
    { id: 58, emoji: '🥺', name: 'Pleading Face' },
    { id: 59, emoji: '🤯', name: 'Exploding Head' },
    { id: 60, emoji: '🥴', name: 'Woozy Face' },
    { id: 61, emoji: '🤪', name: 'Zany Face' },
    { id: 62, emoji: '🤬', name: 'Face with Symbols on Mouth' },
    { id: 63, emoji: '🤗', name: 'Hugging Face' },
    { id: 64, emoji: '🥷', name: 'Ninja' },
    { id: 65, emoji: '🦷', name: 'Tooth' },
    { id: 67, emoji: '🫁', name: 'Lungs' },
    { id: 68, emoji: '🫀', name: 'Anatomical Heart' },
    // Add more emojis and their names here...
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
        <div className="emoji_searchbox m-5">
            <input
                type="text"
                placeholder="Search for an emoji by name..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div>
                {filteredEmojis.map((emoji) => (
                <span key={emoji.name}>{emoji.emoji}</span>
                ))}
            </div>
        </div>
    </div>
  );
};

export default EmojiSearch;