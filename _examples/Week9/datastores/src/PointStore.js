
class PointStore {

    init(pointData) {
        this.points = pointData;
        this.subscribers = [];
    }

    changePoint(pointId) {
        this.points[pointId] = "O";
        console.log(this.points);
    }

    register(object) {
        this.subscribers.push(object);
        console.log(this.subscribers);
    }

}

export default new PointStore();