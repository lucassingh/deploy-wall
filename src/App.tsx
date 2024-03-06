import { AuthProvider } from './context/AuthContext';
import RouteSystem from './routes/Routes';

function App() {

	return (
		<AuthProvider>
			<RouteSystem />
		</AuthProvider>
	)
}

export default App
