export default function OpenPortfolio(decorativeWrapperRef, introPanelWrapperRef, containerRef, bottomPadRef) {

    let decorativeWrapper = decorativeWrapperRef.current;
    let introPanelWrapper = introPanelWrapperRef.current;
    let container = containerRef.current;
    let bottomPad = bottomPadRef;

    introPanelWrapper.style.display = 'none';
    decorativeWrapper.style.display = 'inherit';
    container.style.display = 'flex';
    bottomPad.style.height = '1rem';
}