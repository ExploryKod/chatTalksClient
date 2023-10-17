import { useCounterStore } from '../StateManager/userStore';

const Profile: React.FC = () => {
    const { count, increment, decrement } = useCounterStore();
    return (
        <>
            <div>
                <h1>Profile</h1>
                <p> TES UN BOSS AMAURY </p>
            </div>
            <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}

export default Profile