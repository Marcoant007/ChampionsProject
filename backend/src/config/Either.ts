
 export default class Either<X, Y> {

    private _isErro: boolean = false;
    private _left: X;
    private _right: Y;

    private constructor() {
    }

    public static left<X, Y>(value: X): Either<X, Y> {
       let either = new Either<X, Y>();
       either.setLeft(value);
       return either;
    }

    public static right<X, Y>(value: Y): Either<X, Y> {
        let either = new Either<X, Y>();
        either.setRight(value);
        return either;
    }

    public isLeft(): boolean {
        return this._isErro;
    }

    public left(): X {
        return this._left;
    }

    public right(): Y {
        return this._right;
    }

    private setLeft(value: X) {
        this._left = value;
        this._isErro = true;
    }

    private setRight(value: Y) {
        this._right = value;
        this._isErro = false;
    }
}
