import {useLocation, useNavigate} from "react-router-dom";
import MainLayout from "../../components/MainLayout"
import SpaceGrid from "../../components/organisms/SpaceGrid";

const SpacePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {organization_id = 0} = location.state || {};
  if (organization_id === 0) {
    console.error("올바르지 않은 Space 페이지 접근입니다. 조직 찾기 페이지에서 시작해주세요.");
    alert("올바르지 않은 Space 페이지 접근입니다. 조직 찾기 페이지에서 시작해주세요.");
    navigate("/");
  } else {
    console.log(organization_id);
  }

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
