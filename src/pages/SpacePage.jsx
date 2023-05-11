import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout"
import SpaceGrid from "../components/organisms/SpaceGrid"

const SpacePage = () => {
  const navigate = useNavigate();
  const handleSpace = (index) => {
    // find onclick event component id
    // and then console.log it
    console.log(index);
    navigate("/space/" + index);
  }
  return (
    <MainLayout>
      <SpaceGrid onClick={handleSpace} />
    </MainLayout>
  );
};
export default SpacePage;
