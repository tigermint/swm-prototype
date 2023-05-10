import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";

const WelcomePage = () => {
    const [data, setData] = useState(null);

    const dbGetUserByMyUuid = async () => {
        const {data, error} = await supabase
            .from('user')
            .select()

        // 결과 확인
        if (error) {
            console.error(error);
        } else {
            console.log(data);
            console.log(supabase);
            // setData(data);
        }
    }
    dbGetUserByMyUuid();

    const dbGetUserByMyUuid2 = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        console.log("UserMetadata: " + JSON.stringify(user.user_metadata));
        console.log(user?.id)
    }
    dbGetUserByMyUuid2();

    // case1(#1): registered user
    // case2(#1-1): new user
    // next case(#1-2): all
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
