    import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryLi, ImageGalleryList } from "./ImageGallery.styled"

    export const ImageGallery = ({gallery, onImageClick}) => {
        return (
            <ImageGalleryList>
                {gallery.map(item => (
                    <ImageGalleryLi key={item.id} >
                    <ImageGalleryItem url={item.webformatURL} tag={item.tags} onClick={onImageClick}/>
                </ImageGalleryLi>
        ))}
        </ImageGalleryList>
    )
    }