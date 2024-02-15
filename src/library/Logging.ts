export enum LogLevel {
    INFO = '\x1b[36m[INFO]\x1b[0m',
    WARN = '\x1b[33m[WARN]\x1b[0m',
    ERROR = '\x1b[31m[ERROR]\x1b[0m',
}

export default class Logging {
    private static log = (level: LogLevel, args: any) => {
        console.log(
            level,
            `${new Date().toLocaleString()}`,
            typeof args === 'string' ? args : args
        );
    };

    public static info = (args: any) => Logging.log(LogLevel.INFO, args);

    public static warn = (args: any) => Logging.log(LogLevel.WARN, args);

    public static error = (args: any) => Logging.log(LogLevel.ERROR, args);
}
