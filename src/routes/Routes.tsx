import { Routes, Route } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { ImageLoadedScreen, NotFoundScreen, HomeScreen, ImageLoadedDetailScreen, PublicImgScreen } from '../pages/auth';
import LoginScreen from "../pages/login/LoginScreen";

const RouteSystem = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            {isAuthenticated ? (
                <>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/loaded-images" element={<ImageLoadedScreen />} />
                    <Route path="/images/:id" element={<ImageLoadedDetailScreen />} />
                    <Route path="/public-images" element={<PublicImgScreen />} />
                </>
            ) : (
                <Route path="/" element={<LoginScreen />} />
            )}
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    );
};

export default RouteSystem;
