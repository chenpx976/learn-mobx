import React from 'react';
import { observer } from 'mobx-react';

function MyComponent({ store }) {
  const clickButton = store.clickButton.bind(store);
  const addCount = store.addCount.bind(store);
  const miusCount = store.miusCount.bind(store);
  return (
    <div>
      <button type="button" onClick={clickButton}>Click me!</button>
      <h4>You've clicked the button {store.numClicks} times.</h4>
      <h5>You've clicked button an {store.oddOrEven} number of times.</h5>
      <p>{store.record}</p>
      <p>{store.current}</p>
      <div>
        <button onClick={addCount} >+</button>
        <button onClick={miusCount}  >-</button>
      </div>
    </div>
  );
}

MyComponent.propTypes = {
  store: React.PropTypes.object,
};

export default observer(MyComponent);
