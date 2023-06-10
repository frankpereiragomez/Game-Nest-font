import { useNavigate } from "react-router-dom";
import FeedbackMessages from "../../utils/feedbackMessages/feedbackMessages";
import paths from "../../routers/path/paths";
import PageNotFoundStyled from "./PageNotFoundStyled";
import Button from "../../components/Button/Button";

const PageNotFound = (): React.ReactElement => {
  const navigate = useNavigate();

  const actionOnClick = () => {
    navigate(paths.homePage, { replace: true });
  };

  return (
    <PageNotFoundStyled className="page-container">
      <article className="info-container">
        <span className="info-container__status-code">404</span>
        <h1 className="info-container__message">
          {FeedbackMessages.pageNotFound}
        </h1>
        <Button
          button={{
            className: "info-container__button",
            actionOnClick,
            text: FeedbackMessages.goBack,
          }}
        />
      </article>
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
