import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h3 className="title">Welcome to puppy bowl!</h3>
      <p>
        This website allows you to:
        <ul>
          <li>See a list of each player competing in the bowl.</li>
          <li>
            Click on each player that will lead you to another page view with
            specific details on that player, such as current status and breed.
          </li>
          <li>CREATE a new player.</li>
          <li>
            Search for a specific player in a search bar and see a new list with
            only players with names that match the text in the search bar.
          </li>
          <li>
            DELETE a player (ONLY DELETE PLAYERS YOU YOURSELF CREATE, PLEASE!)
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Home;
