import React from 'react';
import AddForm from './Components/AddForm';
import Navbar from './Components/Navbar';

// POSTGRESQL INFO
// 192.168.1.211
// You are connected to database "snippy" as user "stephen" via socket in "/var/run/postgresql" at port "5432".

function App() {
	return (
		<>
			<Navbar />
			<AddForm />
		</>
	);
}

export default App;
