import { fetchImages } from "api";
import { Component } from "react";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout";
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
        loading: true,
      }));
    } catch (error) {
      this.setState({ error: true });
    }
  }
    } 
  

  handlerLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
 /* const lastPage = Math.ceil(this.state.totalHits / this.state.images.length); */
    return (
      <Layout>
        <SearchBar onSubmit={this.onSearch} />
        {this.state.images.length > 0 && <ImageGallery gallery={this.state.images} />}
        {this.state.images.length > 0 && <Button onLoadMore={this.handlerLoadMore} />}
      </Layout>
    )
  }


}