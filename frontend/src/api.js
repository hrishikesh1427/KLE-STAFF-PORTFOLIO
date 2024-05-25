const [newData, setData] = useState("");
    const getData = () =>{
      // add url here
      axios.get('http://127.0.0.1:8000') 
      .then(res => {
          console.log('Data fetcted from backend!')
          setData(res.data)
          console.log(res.data)
      }).catch(err => {
          console.log(err)
      })
  }

