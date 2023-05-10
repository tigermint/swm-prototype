import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";

/**
 * user 테이블에 uuid를 기준으로 name을 신규 등록한다.
 * @param uuid
 * @param name
 * @returns {(function(*): Promise<void>)|*}
 */
function dbPutUser(uuid, name) {
    return async () => {
        console.log("1111111111112");
        const {data, error} = await supabase
            .from('user')
            .insert([
                {uuid: uuid, name: name},
            ])
        console.log("111111111111");

        // 결과 확인
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    };
}

/**
 * User 데이터베이스에 동일한 uuid가 존재하는지 확인
 * @param userInform
 * @returns {(function(): Promise<boolean|undefined>)|*} , 유저존재:true, 유저없음:false
 */
function dbCheckUser(userInform) {
    return async () => {
        //await dbGetAuth();

        const {data, error} = await supabase
            .from('user')
            .select()
            .eq('uuid', userInform)

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
}

function dbGetLoginedAuth(setUserInform) {
    return async () => {
        const {data: {user}, error} = await supabase.auth.getUser()

        // 결과 확인
        if (error) {
            console.error(error);
        } else {
            setUserInform(user?.id);
        }
    };
}

const WelcomePage = () => {
    const [userInform, setUserInform] = useState(null);

    // get uuid from supabase.auth
    useEffect(() => {
        const dbGetAuth = dbGetLoginedAuth(setUserInform);
        dbGetAuth();
    }, []);

    // create new user
    const dbGetUserOrCreate = dbCheckUser(userInform);
    const dbCreateUser = dbPutUser(userInform, "홈홈홈");
    dbGetUserOrCreate().then(async (value) => {
        console.log(value);
        if (value === false) {
            console.log("가입되지않은 사용자입니다.");
            await dbCreateUser();
        }
    });

    // rend
    return (
        <div>
            <h1>MywwwPage</h1>
            <span>
                supabase:
                <input id="aaa" type="text" value={JSON.stringify(supabase)}/>
            </span>
        </div>
    );
};
export default WelcomePage;
