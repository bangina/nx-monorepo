import ReviewFeatureList from 'libs/review/feature-list/src/lib/review-feature-list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <h1>Board Game Hoard: Review</h1>
      <Routes>
        <Route path="/" element={<ReviewFeatureList />} />
      </Routes>

      {/* <Route
          path="/:game"
          render={({ match }) => <ReviewFeatureList />}
        ></Route> */}
    </>
  );
}

export default App;
