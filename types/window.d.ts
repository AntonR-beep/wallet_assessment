export {}

declare global {
    interface EthereumProvider {
        request(args: { method: string; params?: unknown[] | Record<string, unknown> }): Promise<any>
        on(event: string, handler: (...args: any[]) => void): void
        removeAllListeners?: (event?: string) => void
        isMetaMask?: boolean
    }

    interface Window {
        ethereum?: EthereumProvider
    }
}
