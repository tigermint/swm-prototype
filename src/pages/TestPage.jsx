import {Input} from '@mantine/core';
import { supabase } from "../utils/supabaseClient";

const TestPage = () => {
    const handleLogin = async() => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000/welcome'
            }
        })
    };

    return (
        <div>
            <h1>Google Login Test</h1>
            for SSH Prototype - 2023.05.10
            <br/>
            <input type="button" onClick={handleLogin()}>login</input>
        </div>
    );
};
export default TestPage;
