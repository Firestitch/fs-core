import { of, Observable, BehaviorSubject } from 'rxjs';


export class RouteSubject {

  public subject;

  constructor() {
    this.subject = new BehaviorSubject(undefined);
  }

  /**
   * Subscribe to observer data changes
   * @param func
   * @returns
   */
  public subscribe(func) {
    return this.subject.subscribe(func);
  }

  /**
   * Observe changes from passed observable (Service)
   * @param observable
   * @returns
   */
  public observe(observable): Observable<RouteSubject> {

    observable.subscribe(val => {
      this.next(val);
    });

    return of(this);
  }

  /**
   * Provide value to subscribers
   * @param val
   * @returns
   */
  public next(val): Observable<RouteSubject> {
    this.subject.next(val);

    return of(this);
  }

  /**
   * Destroy observer
   */
  public destroy() {
    this.subject.complete();
  }
}
