export interface ILogger {
    debug(message: string, obj?: any): void;
    warning(message: string, obj?: any): void;
    error(message: string, obj?: any): void;
}
