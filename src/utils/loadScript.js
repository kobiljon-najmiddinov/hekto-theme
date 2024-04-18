export const loadScript = (text) => {
    if (window.loadedScripts[text]) return;
    window.loadedScripts[text] = true;
}