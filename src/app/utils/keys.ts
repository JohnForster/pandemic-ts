const keys = <O>(obj: O): (keyof O)[] => Object.keys(obj) as (keyof O)[];

export default keys;
