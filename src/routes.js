import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { UseStatePage } from './pages/useStatePage';
import { UseEffectPage } from './pages/useEffectPage';
import { UseCallBackPage } from './pages/useCallbackPage';
import { UseMemoPage } from './pages/useMemoPage';
import { UseRefPage } from './pages/useRefPage';
import { UserContextProvider } from './contexts/userContext';

const AppRoutes = () => {
    return (
        <Router>
            <UserContextProvider>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/useState' element={<UseStatePage />} />
                    <Route path='/useEffect' element={<UseEffectPage />} />
                    <Route path='/useCallBack' element={<UseCallBackPage />} />
                    <Route path='/useMemo' element={<UseMemoPage />} />
                    <Route path='/useRef' element={<UseRefPage />} />
                </Routes>
            </UserContextProvider>
        </Router>
    )
}

export { AppRoutes };