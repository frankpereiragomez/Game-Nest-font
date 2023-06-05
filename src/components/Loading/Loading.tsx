import { Ring } from "@uiball/loaders";
import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading-container">
      <Ring size={120} lineWeight={5} speed={2} color="#61A146" />
    </LoadingStyled>
  );
};

export default Loading;
