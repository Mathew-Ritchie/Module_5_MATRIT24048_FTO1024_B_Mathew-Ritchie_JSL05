// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  // Feel free to add even more songs
];

//created a new songs array with my 5 songs to be added to the list
const songsToAdd = [
  {
    title: "Come a Little Bit Closer",
    artist: "Jay & The Americans",
    genre: "Rock",
  },
  { title: "The Rubberband Man", artist: "The Spinners", genre: "R&B" },
  {
    title: "Brandy (You're A Fine Girl",
    artist: "Looking Glass",
    genre: "Rock",
  },
  { title: "The Real Slim Shady", artist: "Eminem", genre: "Rap" },
  { title: "Baas Vannie Plaas", artist: "Loufi", genre: "Rap" },
];

//using concat() I have combined my array of songs to the original array and made a new array called newPlaylist
const newPlayList = songs.concat(songsToAdd);
//console.log(newPlayList);

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "Rap",
  Rocket: "Rock",
  Groot: "R&B",
  // Add preferences for Drax, Rocket, and Groot
};

const playlistsDiv = document.getElementById("playlists");

function generatePlaylist(guardians, newPlayList) {
  //create divs for each guardian

  for (let name in guardians) {
    const individualDiv = document.createElement("div");
    individualDiv.classList.add("playlist");
    playlistsDiv.appendChild(individualDiv);
    const guardianHeading = document.createElement("h3");
    guardianHeading.textContent = `${name}'s Playlist`;
    individualDiv.appendChild(guardianHeading);
    const ul = document.createElement("ul");

    newPlayList.map((song) => {
      if (song.genre === guardians[name]) {
        const songList = document.createElement("li");
        songList.textContent = `${song.title} by ${song.artist}`;
        ul.appendChild(songList);
      } else {
      }
    });

    individualDiv.appendChild(ul);
  }

  //console.log(Object.values(guardians));
  // Use the map() function to create playlists for each Guardian
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, newPlayList);
