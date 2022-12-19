export default interface PresentationLayer {
    start(): Promise<void>;
    stop(): Promise<void>;
}
