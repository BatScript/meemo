import '@pages/popup/Popup.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

const Popup = () => {
  return (
    <>
      <div className="bg-sky-900 text-white text-center p-2">
        <h1 className="text-lg">Meme it!</h1>
        <p className="text-md">Click on any image to make meme out of it.</p>
      </div>
    </>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
