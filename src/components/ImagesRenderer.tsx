
import { useCallback, useState } from "react";
import { ImageType } from "./Global/Types/Data"
import ImageViewer from 'react-simple-image-viewer';

type expectedProps = {
    imagesToRender: ImageType[],
    // isViewerOpen: boolean,
    // currentImage: number | undefined,
    // openImageViewer: (index: number) => void,
    // closeImageViewer: () => void
}

const ImagesRenderer = ({ imagesToRender } : expectedProps): JSX.Element => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<number>();
    
    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return <>
        {
            imagesToRender?.map((image, index) =>
                <img key={index} src={image.path} alt={image.alt} id={index.toString()} title={image.name} onClick={() => openImageViewer(index)} />
            )
        }
        {isViewerOpen &&
            <ImageViewer
                src={imagesToRender!.map(x => x.path)!}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                closeComponent={<img src='./close.svg' />}
            />
        }
    </>
}

export default ImagesRenderer