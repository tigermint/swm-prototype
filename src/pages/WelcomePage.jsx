import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";

const WelcomePage = () => {
    const [userInform, setUserInform] = useState(null);

    // get uuid from supabase.auth
    useEffect(() => {
        const dbGetAuth = async () => {
            const {data: {user}, error} = await supabase.auth.getUser()

            // 결과 확인
            if (error) {
                console.error(error);
            } else {
                setUserInform(user?.id);
            }
        }
        dbGetAuth();
    }, []);

    // create new user
    const dbPutUser = async (name) => {
        const {data, error} = await supabase
            .from('user')
            .insert([
                {uuid: userInform, name: name},
            ])
    }

    // get or create user
    const dbGetUserOrCreate = async () => {
        //await dbGetAuth();

        const {data, error} = await supabase
            .from('user')
            .select()
            .eq('uuid', userInform)

        // 결과 확인
        if (error) {
            console.error(error);
            if (error.code === 'PGRST116') {  // 검색된 기록이 없을때
                console.log("가입되지않은 사용자입니다.");
                await dbPutUser("배고파");
            }
        } else {
            console.log(data[0]);
            if (data[0] === undefined) {
                console.log("가입되지않은 사용자입니다.");
                await dbPutUser("홈길동");
            }
        }
    }
    dbGetUserOrCreate();

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
