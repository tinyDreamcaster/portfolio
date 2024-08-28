export default function OpenPortfolio(decorativeWrapperRef, introPanelWrapperRef, containerRef) {

    let decorativeWrapper = decorativeWrapperRef.current;
    let introPanelWrapper = introPanelWrapperRef.current;
    let container = containerRef.current;

    introPanelWrapper.style.display = 'none';
    decorativeWrapper.style.display = 'inherit';
    container.style.display = 'flex';
}