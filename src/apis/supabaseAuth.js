import {supabase} from "../utils/supabaseClient";
//TODO 배포전 console.log 제거

export const googleLogin = async (redirect_uri) => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirect_uri
        }
    })
};

/**
 *
 * @returns {Promise<string>}
 * @exampleCode
 *    const [userInform, setUserInform] = useState(null);
 *
 *    getAuth().then((user_uuid) => {
 *        setUserInform(user_uuid);
 *    };
 */
export const getAuth = async () => {
    const {data: {user}, error} = await supabase.auth.getUser()

    // 결과 확인
    if (error) {
        console.error(error);
    } else {
        return user?.id;
    }
};

/**
 * user 테이블에 uuid를 기준으로 name을 신규 등록한다.
 * @param uuid
 * @param name
 * @returns {(function(*): Promise<void>)|*}
 */
export const signUp = async (uuid, name) => {
    const {data, error} = await supabase
        .from('user')
        .insert([
            {uuid: uuid, name: name},
        ])

    // 결과 확인
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
};

/**
 * User 데이터베이스에 동일한 uuid가 존재하는지 확인
 * @param uuid: supabase에서 부여한 uuid(getAuth로 확인가능)
 * @returns {(function(): Promise<boolean|undefined>)|*} , 유저존재:true, 유저없음:false
 */
export const existsUserByUuid = async (uuid) => {
    const {data, error} = await supabase
        .from('user')
        .select()
        .eq('uuid', uuid)

    // 결과 확인
    if (error) {
        console.error(error);
        if (error.code === 'PGRST116') {  // 검색된 기록이 없을때
            return false;
        }
    } else {
        console.log(data[0]);
        if (data[0] === undefined) {
            return false;
        }
        return true;
    }
};

export const getMyUserInform = async () => {
    const {data: {user}, auth_error} = await supabase.auth.getUser()
    const uuid = user?.id;

    const {data, error} = await supabase
        .from('user')
        .select()
        .eq('uuid', uuid)

    return data[0];
}
