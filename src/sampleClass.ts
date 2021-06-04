export class SampleBase {
    constructor() {
    }
    /**
     * name
     */
    public name(): string {
        return typeof (this)
    }
}
export class SampleClass extends SampleBase {
    private Str: string;
    constructor(str: string) {
        super();
        this.Str = str;
    }
    /**
     * name
     */
    public override name(): string {
        return typeof (this)
    }
    /**
     * GetValue
     */
    public GetValue(): string {
        return this.Str;
    }
    /**
     * ThrowException
     */
    public ThrowException() {
        throw new Error("Errorだよ");        
    }
}