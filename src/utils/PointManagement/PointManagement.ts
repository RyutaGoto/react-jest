export class PointManagement {
  static total: number = 0;
  private point: number = 0;

  constructor(point: number) {
    this.point = point;
    PointManagement.total += point;
  }

  get total() {
    return PointManagement.total;
  }

  add = (point: number) => {
    this.point += point;
    PointManagement.total += point;
    return this.point;
  };

  sub = (point: number) => {
    this.point -= point;
    PointManagement.total -= point;
    return this.point;
  };

  clear = () => {
    this.point = 0;
    PointManagement.total = 0;
  };
}
