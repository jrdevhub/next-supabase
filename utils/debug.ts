type LogLevel = "log" | "warn" | "error";

export function debug(level: LogLevel, ...args: unknown[]) {
    const isEnabled =
        process.env.NODE_ENV === "development" || process.env.DEBUG === "true";

    if (!isEnabled) return;

    switch (level) {
        case "warn":
            console.warn(...args);
            break;
        case "error":
            console.error(...args);
            break;
        default:
            console.log(...args);
            break;
    }
}
