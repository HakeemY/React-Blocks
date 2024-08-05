import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";

const MainContent = () => {
  return (
    <div className="main">
      <div className="top">
        <Subcontent></Subcontent>
        <Subcontent></Subcontent>
        <Subcontent></Subcontent>
      </div>
      <div className="bottom">
        <Advertisement></Advertisement>
      </div>
    </div>
  );
};

export default MainContent;
