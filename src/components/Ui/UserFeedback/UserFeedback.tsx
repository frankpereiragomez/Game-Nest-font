import { useAppDispatch, useAppSelector } from "../../../store";
import { hideFeedbackActionCreator } from "../../../store/ui/uiSlice";
import UserFeedbackStyled from "./UserFeedbackStyled";

const UserFeedback = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <UserFeedbackStyled
      className="feedback-container"
      role="button"
      tabIndex={0}
      onClick={handleOnClose}
      onKeyDown={handleOnClose}
    >
      <article className="modal" aria-label="feedback modal">
        <div className="modal__feedback-type">
          <h2
            className={`modal__title${isError ? " modal__title--error" : ""}`}
          >
            {isError ? "Error" : "Great"}
          </h2>
          {isError ? (
            <button
              className="modal__close-button"
              aria-label="close error button"
            >
              <img
                src="images/feedback/close-error.svg"
                alt="error icon"
                width={48}
                height={48}
                loading="lazy"
              />
            </button>
          ) : (
            <button
              className="modal__close-button"
              aria-label="close great button"
            >
              <img
                src="images/feedback/close-great.svg"
                alt="great icon"
                width={48}
                height={48}
                loading="lazy"
              />
            </button>
          )}
        </div>
        <p className="modal__text"> {message}</p>
      </article>
    </UserFeedbackStyled>
  );
};

export default UserFeedback;
