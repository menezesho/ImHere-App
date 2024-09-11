import { StatusBar } from "react-native";

import { Home } from './screens/Home';

export default function App() {
    return (
        <>
            <StatusBar
                barStyle='light-content'
                backgroundColor='#131016'
            />
            <Home />
        </>
    );
}
