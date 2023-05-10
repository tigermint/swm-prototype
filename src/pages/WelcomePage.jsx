import {useEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";

const WelcomePage = () => {
    const dbGetUserByMyUuid = async() => {
        const { data, error } = await supabase
            .from('user')
            .select()
            //.eq('uuid', user.email)

        // 결과 확인
        if (error) {
            console.error(error);
        } else {
            console.log(data);
            console.log(supabase);
        }
    }
    dbGetUserByMyUuid();

    // case1(#1): registered user
    // case2(#1-1): new user
    // next case(#1-2): all
    return (
        <div>
            <h1>MywwwPage</h1>
        </div>
    );
};
export default WelcomePage;
