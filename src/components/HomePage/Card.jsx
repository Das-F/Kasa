import announces from "../../data/announces.json";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(announces);
  }, []);

  return (
    <div className="card-list">
      {data.map((announce) => (
        <Link to={`/rental/${announce.id}`} key={announce.id} className="card-link">
          <div className="card-announce">
            <img src={announce.cover} alt={announce.title} className="card-cover" />
            <h3 className="card-title">{announce.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
