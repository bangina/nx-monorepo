import { useGames } from '@monorepo/review/data-access-game';
import { currencyFormat } from '@monorepo/review/util-formatter';

/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

export function ReviewFeatureList(props: ReviewFeatureListProps) {
  const games = useGames();
  return (
    <div>
      {games.map((gameItem) => (
        <span>{currencyFormat(gameItem.currency)}</span>
      ))}
    </div>
  );
}

export default ReviewFeatureList;
