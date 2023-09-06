import { fetchImages } from "api";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar } from "./SearchBar/SearchBar";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
    totalHits: 0,
  }

   onSearch = (evt) => {
    evt.preventDefault();
    console.log(evt.target.query.value)
    this.setState({
      query: evt.target.query.value,
      images: [],
      page: 1,
    })
  } 

  async componentDidUpdate(prevProps, prevState){ 
     if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) { 
     try {
      const { hits, totalHits } = await fetchImages(
        this.state.query,
        this.state.page
      );
      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
        totalHits: totalHits,
      }));
    } catch (error) {
      this.setState({ error: true });
    }
  }
    } 
  

  // handlerLoadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }))
  // }

  render() {

    return (
    <div>
        <SearchBar onSubmit={this.onSearch} />
        {this.state.images.length > 0 && <ImageGallery gallery={this.state.images} />}

      </div >
    )
  }


}