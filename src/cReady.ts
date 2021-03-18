export class cReady {
  private _resolve: any;
  private _ready = new Promise<void>(r => this._resolve = r);
  public setAsReady(): void {
    return this._resolve();
  };
  public ready() {
    return this._ready;
  }
}
