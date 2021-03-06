import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
