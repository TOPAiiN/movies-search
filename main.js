function App() {
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);
    const [filter, setFilter] = React.useState('');
  
    React.useEffect(() => {
      async function getData() {
        const response = await fetch('./movies.json');
        const json = await response.json();
        setData(json);
        setLoaded(true);
      }
      getData();
    }, []);
    console.log('loaded:', loaded, 'data:', data);
  
    return (
      <>
      <div className="input-group justify-content-center mb-3 sticky-top">
          <input
           type="text" 
           className="form-control search" 
           placeholder="Search by movie name"             
           value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
        <div className="container">          
          <div className="col-sm">
            {loaded &&
              data.movies.map((movie, i) => (
                <Movie
                  key={i}
                  title={movie.title}
                  showTime={movie.showTime}
                  screen={movie.screen}
                  row={movie.row}
                  seat={movie.seat}
                  imageUrl={movie.imageUrl}
                />
                
              ))}
          </div>
        </div>
      </>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  