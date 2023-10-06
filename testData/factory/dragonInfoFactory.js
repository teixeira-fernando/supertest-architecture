import allDragonsInfoQuery from '../queries/allDragonsInfoQuery';
import singleDragoninfoQuery from '../queries/singleDragoninfoQuery';

class DragonInfoFactory {
  getInfoAllDragons() {
    return allDragonsInfoQuery;
  }

  getInfoSingleDragon(id) {
    singleDragoninfoQuery.variables.dragonId = id;
    return singleDragoninfoQuery;
  }
}

export default new DragonInfoFactory();
