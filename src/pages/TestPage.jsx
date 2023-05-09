import { GoogleButton } from '../components/atoms/SocialButtons/GoogleButton';
import { Input } from '@mantine/core';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const TestPage = () => {
    const [supabase, setSupabase] = useState(null);
    const [user, setUser] = useState(null);

    const GOOGLE_REST_API_KEY = '541448905827-cn5cls6glevta93fko8p6ke9vdp72hfu.apps.googleusercontent.com';
    const supabaseUrl = 'https://nzhaegdvcmeuxnbfawjc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aGFlZ2R2Y21ldXhuYmZhd2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1MDk4MTQsImV4cCI6MTk5OTA4NTgxNH0.jmiGu0fzMv-rF07o8noAwg_Posu-ia_MJrxCMzZ_Ub4';

    const handleLogin = async (googleUser) => {
        const { id_token } = googleUser.clientId;
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })

        // 결과 확인
        if (error) {
            console.error(error);
        } else {
            setUser(user);
        }
    };

    // 내가 쓴 글만 가져오도록 supabase 정책 설정함
    const getTestData = async() => {
        const { data, error } = await supabase
            .from('test_board')
            .select()

        // 결과 확인
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    }
    getTestData();

    useEffect(() => {
        const supabaseClient = createClient(supabaseUrl, supabaseKey);
        setSupabase(supabaseClient);
    }, []);

    if (!supabase) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Google Login Test</h1>
            for SSH Prototype - 2023.05.08
            <br />
            {user ? (
                <p>Welcome, {user.email}!</p>
            ) : (
                <GoogleOAuthProvider clientId={GOOGLE_REST_API_KEY}>
                    <GoogleLogin
                        onSuccess={(res) => {
                            console.log(res);
                            handleLogin(res);
                        }}
                        onFailure={(err) => {
                            console.error(err);
                        }}
                    />
                </GoogleOAuthProvider>
            )}
        </div>
    );
};
export default TestPage;
