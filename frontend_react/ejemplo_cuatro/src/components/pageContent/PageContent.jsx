import './pageContent.css';

const PageContent = ( { children, headerTitle = '', actions = [] } ) => {
  return (
    <div className='page-content'>
      <header className='page-content__header'>
        <div>
          { headerTitle }
        </div>
        <div className='page-content__header_actions'>
          { [ ...actions ] }
        </div>
      </header>
      <main className='page-content__main'>
        { children }
      </main>
    </div>
  );
};

export default PageContent;
