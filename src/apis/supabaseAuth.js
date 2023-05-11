import {supabase} from "../utils/supabaseClient";

export const googleLogin = async (redirect_uri) => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirect_uri
        }
    })
};
