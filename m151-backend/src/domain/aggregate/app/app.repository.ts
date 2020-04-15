export abstract class AppRepository {
    abstract getStatus(): Promise<string>;
}
