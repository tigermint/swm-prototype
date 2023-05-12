import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout"
import SpaceGrid from "../../components/organisms/SpaceGrid";

const SpacePage = () => {
  const handleSpace = (index) => {
    console.log(index);
  }
  return (
    <MainLayout>
      <SpaceGrid onClick={handleSpace} />
    </MainLayout>
  );
};
export default SpacePage;
