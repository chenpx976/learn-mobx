import { observable, computed, action, autorun } from 'mobx';

class Store {
  name = 'demo01';
  description = 'mobx is the best!';
  @observable numClicks = 0;
  @observable current = 0;
  @observable record = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  };

  @autorun(() => {
    console.log();
  });

  @action clickButton() {
    this.numClicks++;
  };
  @action miusCount() {
    this.current--;
  };
  @action addCount() {
    this.current++;
    this.record = this.current > this.record ? this.current : this.record;

  };

}


export default Store;
