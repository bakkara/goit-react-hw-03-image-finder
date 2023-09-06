    import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

    export const ImageGallery = ({gallery}) => {
        return (
        <ul>
            {gallery.map(item => (
                <li key={item.id}>
                    <ImageGalleryItem url={item.webformatURL} tag={item.tags} />
                </li>
        ))}
        </ul>
    )
    }