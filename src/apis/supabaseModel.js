import {supabase} from "../utils/supabaseClient";

function getTest() {
    return async () => {
        const {data, error} = await supabase
            .from('test')
    };
}

// [필요한 supabase 구문]
// ### uuid를 기준으로 user 조회하기
// ### uuid + name으로 user 등록하기
// ### 이미 존재하는 Organization 확인하기
// ### 사용자가 새로운 Organization 등록하기
// ### 사용자와 Organization을 연결하기 (user_to_organization)
// ### Space(공간) 조회하기
// ### Space(공간) 등록하기
// ### Space 예약하기 (Reservation 생성하기)
// ### name과 user_to_organization(참가자)을 기준으로 User 조회하기
// ### 예약 참여자를 추가하기 (Participating User 생성)
// ### 예약 취소하기 (Reservation 및 Particiapting user 삭제)
// ### 예약 내역 조회하기 (user_id 기준으로 Participating 조회)
