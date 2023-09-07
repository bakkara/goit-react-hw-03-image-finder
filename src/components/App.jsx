import { fetchImages } from "api";
import { Component } from "react";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout";
import { Loader } from "./Loader/Loader";
import { SearchBar } from "./SearchBar/SearchBar";
import { toast, Toaster } from 'react-hot-toast';
import { ModalComponent } from "./Modal/Modal";


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
    totalHits: 0,
    loadMore: false,
    isModalOpen: false,
  }

   onSearch = (evt) => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.query.value}`,
      images: [],
      page: 1,
    })
  } 

  handlerLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  async componentDidUpdate(prevProps, prevState){ 
     if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) { 
       try {
        this.setState({ loading: true, error: false });
         const { hits, totalHits } = await fetchImages(
           this.state.query.slice(14),
           this.state.page
         );
      
         this.setState((prevState) => ({
           images: [...prevState.images, ...hits],
          loadMore: this.state.page < Math.ceil(totalHits / 12)
         }));
       } catch (error) {
         this.setState({ error: true });
         toast.error(`OOPS! THERE WAS AN ERROR!`)
       }
       finally {
         this.setState({ loading: false });
       }
  }
  } 
  
  openModal = () => {
  console.log('hi')
  this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };


  render() {
    const { images, loading, error, loadMore, isModalOpen } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.onSearch} />
        {loading && <Loader/>}
        {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
        {images.length > 0 && <ImageGallery gallery={images} onImageClick={this.openModal} />}
        {loadMore && <Button onLoadMore={this.handlerLoadMore} />}
        {isModalOpen && <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          gallery={images}
        />}
        <Toaster position="top-right"/>
      </Layout>
    )
  }
}