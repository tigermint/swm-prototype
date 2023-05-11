import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";
import {existsUserByUuid, getAuth, signUp} from "../apis/supabaseAuth";

const WelcomePage = () => {
    const [userInform, setUserInform] = useState(null);

    // get uuid from supabase.auth
    useEffect(() => {
        getAuth().then((user_uuid) => {
            setUserInform(user_uuid);
        });
    }, []);

    // create new user
    existsUserByUuid(userInform).then(async (value) => {
        console.log(value);
        if (value === false) {
            console.log("가입되지않은 사용자입니다.");
            // await dbCreateUser();
            await signUp(userInform, "기역니은");
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
