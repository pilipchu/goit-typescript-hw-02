import { useEffect, useState } from "react";
import { getPhotos } from "../baseUrl";
import SeatchBar from "../SearchBar/SeatchBar";
import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [submitQuery, setSubmitQuery] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (imageUrl) => {
    setImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setImage("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (submitQuery.trim() === "") {
      return;
    }
    async function fetchPhotos() {
      try {
        setIsLoader(true);
        setIsError(false);
        const items = await getPhotos(submitQuery, page);
        setTotalPage(page < Math.ceil(items.total / 15));
        setPhotos((prevState) => [...prevState, ...items.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }

    fetchPhotos();
  }, [page, submitQuery]);

  const handleSubmit = async (data) => {
    setSubmitQuery(data);
    setPage(1);
    setPhotos([]);
  };
  const handLoadMore = async () => {
    setPage(page + 1);
  };
  const isLast = totalPage;
  return (
    <>
      <SeatchBar onSubmit={handleSubmit} />
      {photos.length > 0 && <ImageGallery photos={photos} open={openModal} />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && !isLoader && isLast && (
        <LoadMoreBtn newSubmit={handLoadMore} />
      )}
      {isLoader && <Loader />}
      {isOpen && (
        <ImageModal image={image} isOpen={isOpen} isClose={closeModal} />
      )}
    </>
  );
}

export default App;
