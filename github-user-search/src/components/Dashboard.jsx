
function Dashboard() {
    const currentTime = new Date().toLocaleTimeString()
    return (
        <header style={{
            backgroundColor : '#2196f3',
            color : 'white',
            padding : '20px',
            borderRadius : '10px',
            marginBottom : '20px'
        }}>
            <h1>Hello</h1>
            <p>currentTime: {currentTime}</p>
        </header>
    )
}

export default Dashboard
