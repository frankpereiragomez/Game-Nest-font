import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import useVideogames from "../../hooks/useVideogames/useVideogames";
import { useAppDispatch, useAppSelector } from "../../store";
import DetailsPageStyled from "./DetailsPageStyled";
import paths from "../../routers/path/paths";
import { useEffect } from "react";
import { loadSelectedVideogameActionCreator } from "../../store/videogame/videogameSlice";
import { VideogamesDataStructure } from "../../types";

const DetailsPage = (): React.ReactElement => {
  const { deleteVideogame, getVideogameById } = useVideogames();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { videogameId } = useParams();
  const { isLogged, id: userId } = useAppSelector((state) => state.user);

  window.scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      if (videogameId) {
        const videogame = await getVideogameById(videogameId);

        dispatch(
          loadSelectedVideogameActionCreator(
            videogame as VideogamesDataStructure
          )
        );

        const firstImageUrl = videogame?.image as string;
        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = firstImageUrl;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getVideogameById, videogameId]);

  const videogame = useAppSelector((state) => state.videogames.videogameById);

  const deleteOnClick = async (videogameId: string) => {
    await deleteVideogame(videogameId);

    navigate(paths.homePage);
  };

  const isVideogameOwner = isLogged && userId === videogame?.user;

  return (
    <>
      <DetailsPageStyled className="page">
        <h1 className="videogame-details__heading">Details</h1>
        <section className="videogame-details">
          <div className="videogame-details__image-container">
            <img
              className="videogame-details__image"
              src={videogame?.image}
              alt={videogame?.name}
              width={181}
              height={227}
            />
          </div>
          <article className="videogame-details__info-container">
            <h2 className="videogame-details__name">{videogame?.name}</h2>
            <div className="videogame-details__details-container">
              <p className="videogame-details__details">
                {videogame?.description}
                {videogame?.description}
                {videogame?.description}
              </p>
              <span className="videogame-details__game-genre">
                {`${videogame?.genre}   |   ${videogame?.developers}`}
              </span>
            </div>
            <span className="videogame-details__game-price">{`${videogame?.price} €`}</span>
            {isVideogameOwner && (
              <div className="videogame-details__buttons-container">
                <Button
                  button={{
                    icon: "images/edit.svg",
                    className: "videogame-details__button-edit",
                    alt: "edit button",
                    height: "48",
                    width: "48",
                  }}
                />
                <Button
                  button={{
                    ariaLabel: "deleted button",
                    icon: "images/close-square.svg",
                    className: "videogame-details__button-delete",
                    alt: "remove button",
                    height: "48",
                    width: "48",
                    actionOnClick: () => deleteOnClick(videogameId as string),
                  }}
                />
              </div>
            )}
          </article>
        </section>
      </DetailsPageStyled>
    </>
  );
};

export default DetailsPage;
