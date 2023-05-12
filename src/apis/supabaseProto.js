import {supabase} from "../utils/supabaseClient";

export const protoFindOrganizationByName = async (name) => {
    const {data, error} = await supabase
        .from('proto_organization')
        .select('*')
        .eq('name', name);

    return data[0];
};

export const protoCreateOrganization = async (name) => {
    const {data, error} = await supabase
        .from('proto_organization')
        .insert({"name": name})
};

export const protoCreateSpace = async (organization_id, space_name) => {
    const {data, error} = await supabase
        .from('proto_space')
        .insert({"organization_id": organization_id, "name": space_name})
};

export const protoCreateSpaceDetail = async (organization_id, space_name) => {
    const {data, error} = await supabase
        .from('proto_space')
        .insert({
            "organization_id": organization_id,
            "name": space_name,
            "capacity": 100,
            "start_time": "00:00",
            "end_time": "23:59",
            "day_sun": true,
            "day_mon": true,
            "day_tue": true,
            "day_wen": true,
            "day_thu": true,
            "day_fri": true,
            "day_sat": true
        })
};

export const protoFindAllSpaceByOrganizationId = async (organization_id) => {
    const {data, error} = await supabase
        .from('proto_space')
        .select('*')
        .eq('organization_id', organization_id);

    return data;
};

export const protoFindSpaceBySpaceId = async (space_id) => {
    const {data, error} = await supabase
        .from('proto_space')
        .select('*')
        .eq('space_id', space_id)

    return data[0];
};

export const protoFindAllReservationBySpaceIdAndDate = async (space_id, reservation_date) => {
    const {data, error} = await supabase
        .from('proto_reservation')
        .select('*')
        .match({"space_id": space_id, "reservation_date": reservation_date})

    return data;
};

/**
 * 특정 공간에 대한 예약을 생성합니다.
 * @param space_id 공간 번호
 * @param date 예약 일자
 * @param start_time 예약 시작 시간
 * @param end_time 예약 종료 시간
 * @param user_name 예약자명
 * @param user_email 예약자 이메일
 * @param user_count 인원수
 * @returns {Promise<void>}
 */
export const protoCreateReservation = async (space_id, date, start_time, end_time, user_name, user_email, user_count) => {
    const {data, error} = await supabase
        .from('proto_reservation')
        .insert({
            'space_id': space_id,
            'reservation_date': date,
            'reservation_start_time': start_time,
            'reservation_end_time': end_time,
            'user_name': user_name,
            'user_email': user_email,
            'user_count': user_count
        })
};

export const protoFindAllReservationByNameAndEmail = async (name, email) => {
    const {data, error} = await supabase
        .from('proto_reservation')
        .select('*, space_id(space_id, name)')
        .match({
            "user_name": name,
            "user_email": email
        })

    return data;
};

export const protoFindAllReservationByOrganizationIdAndReservationId = async (organization_id, reservation_date) => {
    const {data, error} = await supabase
        .from('proto_reservation')
        .select('*, space_id(organization_id, space_id, name)')
        .match({
            'space_id.organization_id': organization_id,
            'reservation_date': reservation_date
        })

    return data;
};

