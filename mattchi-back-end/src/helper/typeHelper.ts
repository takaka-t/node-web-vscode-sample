export namespace TypeHelper {
  /**引数の値がundefinedかどうか */
  export const isUndefined = (obj: any): boolean => {
    if (typeof obj != "undefined") {
      return false;
    }

    return true;
  };
}
