import {GoogleButton} from '../components/atoms/SocialButtons/GoogleButton';
import {Input} from '@mantine/core';

import {useState, useEffect} from 'react';
import {createClient} from '@supabase/supabase-js';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

// https://nzhaegdvcmeuxnbfawjc.supabase.co/auth/v1/authorize?provider=google&redirect_to=http://localhost:3000/welcome

const TestPage = () => {
    // set supabase component
    const [supabase, setSupabase] = useState(null);
    const [user, setUser] = useState(null);

    const supabaseUrl = 'https://nzhaegdvcmeuxnbfawjc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aGFlZ2R2Y21ldXhuYmZhd2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1MDk4MTQsImV4cCI6MTk5OTA4NTgxNH0.jmiGu0fzMv-rF07o8noAwg_Posu-ia_MJrxCMzZ_Ub4';

    useEffect(() => {
        const supabaseClient = createClient(supabaseUrl, supabaseKey);
        setSupabase(supabaseClient);
    }, []);

    if (!supabase) {
        return <div>Loading...</div>;
    }

    // set supabase oauth logic
    const handleLogin = async (googleUser) => {
        // const { id_token } = googleUser.clientId;
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000/welcome'
            }
        })

        // 결과 확인
        if (error) {
            console.error(error);
        } else {
            setUser(user);
        }
    };

    // rend
    return (
        <div>
            <h1>Google Login Test</h1>
            for SSH Prototype - 2023.05.10
            <br/>
            {user ? (
                    <p>Welcome, {user.email}!</p>
                ) : (
                    <input type="button" onClick={handleLogin()}>login</input>  //TODO 버튼으로 동작하게 변경하기
                )}
        </div>
    );
};
export default TestPage;
