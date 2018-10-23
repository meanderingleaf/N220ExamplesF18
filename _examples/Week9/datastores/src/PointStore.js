
class PointStore {

    init(pointData) {
        this.points = pointData;
        this.subscribers = [];
    }

    changePoint(pointId) {
        
        //update the point data
        this.points[pointId] = { x: 0, y: 0 };

        //tell all the listeners that the point data has been updated.
        this.subscribers.forEach((subscriber)=> {
            subscriber.pointsUpdated();
        })
    }

    register(object) {
        this.subscribers.push(object);
        console.log(this.subscribers);
    }

}

export default new PointStore();