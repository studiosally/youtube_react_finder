import React,{ Component }from 'react';
import SearchForm from './components/SearchForm.jsx';
import VideoList from './components/videolist.jsx';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      videos: []
    }
  }

search(query){

  const url= `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${query}&key=AIzaSyBulBOAwowxf2jzcW_d0Rd3X_dECyU6wLE`
  
  const promise = axios.get(url)

  promise.then(response =>{
    const items = response.data.items
    
    const videos = items
      .filter((v => v.id.kind === "youtube#video"))

      console.log("loaded" + videos.lenght +"videos")

      this.setState({ videos:videos })
  }) 

  promise.catch(error => console.log("errror"))
}

  

render(){
  return (
      <div>
      <SearchForm onSearch={(value) => {this.search(value)}}/>
      <VideoList videos={this.state.videos} />
      </div>
)}

}



export default App;
