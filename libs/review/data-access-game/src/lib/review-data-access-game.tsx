import { useState, useEffect } from 'react';
interface Game {
  id: number;
  name: string;
  description: string;
  currency: number;
}
export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // fetch('/api/game')
    //   .then((res) => res.json())
    //   .then((data) => setGames(data));
    setGames([
      { id: 1, name: 'test', description: 'test', currency: 20000000 },
      { id: 2, name: 'test', description: 'test', currency: 15000000 },
    ]);
  }, []);
  return games;
}
