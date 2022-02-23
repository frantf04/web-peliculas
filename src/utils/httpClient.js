const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(`${API}${path}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2IzNjNjZTkxM2E0MGFhMDU0NWIwMGEzZTQ1MjJhYyIsInN1YiI6IjYxYjJmYzI3NmRjNTA3MDA5NGUxZTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR0sPNgtaHghGPPh6gld1j2CBR5umpoVxjKyyuSsbSA",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
