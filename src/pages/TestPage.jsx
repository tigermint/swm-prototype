import {googleLogin} from "../apis/supabaseAuth";

const TestPage = () => {
    googleLogin('http://localhost:3000/welcome');
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
};
export default TestPage;
