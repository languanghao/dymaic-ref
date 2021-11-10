export interface ReportProcessor {
    name: string

    component: unknown
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
