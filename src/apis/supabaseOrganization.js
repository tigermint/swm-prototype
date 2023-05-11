import {supabase} from "../utils/supabaseClient";

/**
 * 이름을 통해 조직 정보를 검색합니다.
 * @param name
 * @returns {Promise<GetResult<any, any, "*">[]>}, true:존재함, false:없음
 */
export const findOrganizationByName = async (name) => {
    const {data, error} = await supabase
        .from('organization')
        .select('*')
        .eq('name', name);

    return data[0];
};

/**
 * 완벽히 일치하는 조직명이 있는지 확인합니다.
 * @param name
 * @returns {Promise<boolean>}, true:존재함, false:없음
 */
export const existsOrganizationByName = async (name) => {
    const {data, error} = await supabase
        .from('organization')
        .select('*')
        .eq('name', name);

    if (error) {
        return false;
    } else {
        return data[0] !== undefined;
    }
};

export const createOrganization = async (user_id, name) => {
    const {data, error} = await supabase
        .from('organization')
        .insert({"user_id": user_id, "name": name})

    return data;
};

export const joinToOrganization = async (user_id, organization_id, role) => {
    const {data, error} = await supabase
        .from('user_to_organization')
        .insert({"user_id": user_id, "organization_id": organization_id, "organization_role": role})

    return data;
};

export const existsUserJoinedOrganization = async (user_id) => {
    const {data, error} = await supabase
        .from('user_to_organization')
        .select('*')
        .eq('user_id', user_id)

    return data[0];
}
