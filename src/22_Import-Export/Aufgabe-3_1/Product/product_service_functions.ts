//&Module-Namensräume-TS-3_1

export function addProductToService (service: string, productName: string) {
    const server = `${service} serves ${productName}`;
    return server;
}