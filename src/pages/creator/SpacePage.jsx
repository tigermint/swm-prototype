import {useLocation, useNavigate} from "react-router-dom";
import MainLayout from "../../components/MainLayout"
import SpaceGrid from "../../components/organisms/SpaceGrid";
//apis
import {protoFindAllSpaceByOrganizationId} from "../../apis/supabaseProto";
import {useEffect, useState} from "react";
import {getAuth} from "../../apis/supabaseAuth";

const SpacePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        // organization 정보 가져오기
        const {organization_id = 0} = location.state || {};
        if (organization_id === 0) {
            console.error("올바르지 않은 Space 페이지 접근입니다. 조직 찾기 페이지에서 시작해주세요.");
            alert("올바르지 않은 Space 페이지 접근입니다. 조직 찾기 페이지에서 시작해주세요.");
            navigate("/");
        } else {
            console.log(organization_id);
        }

        // spaces 정보 가져오기
        const listUpSpace = (organization_id) => {
            protoFindAllSpaceByOrganizationId(organization_id).then(async (spacesInform) => {
                console.log(spacesInform);
                await setSpaces(spacesInform);
            })
        }
        listUpSpace(organization_id);
    }, []);

    // custom method
    const handleSpace = (index) => {
        console.log(index);
    }
    return (
        <MainLayout>
            <SpaceGrid onClick={handleSpace} spaces={spaces}/>
        </MainLayout>
    );
};
export default SpacePage;
