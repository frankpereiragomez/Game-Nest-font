import { useAppSelector } from "../../../store";
import UserFeedbackStyled from "./UserFeedbackStyled";

const UserFeedback = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.ui);

  return (
    <UserFeedbackStyled className="feedback-container">
      <article className="modal" aria-label="feedback modal">
        <div className="modal__feedback-type">
          <h2
            className={`modal__title${isError ? " modal__title--error" : ""}`}
          >
            {isError ? "Error" : "Great"}
          </h2>
          {isError ? (
            <img
              src="images/feedback/close-error.svg"
              alt="error icon"
              width={48}
              height={48}
              loading="lazy"
            />
          ) : (
            <img
              src="images/feedback/close-great.svg"
              alt="great icon"
              width={48}
              height={48}
              loading="lazy"
            />
          )}
        </div>
        <p className="modal__text"> {message}</p>
      </article>
    </UserFeedbackStyled>
  );
};

export default UserFeedback;
