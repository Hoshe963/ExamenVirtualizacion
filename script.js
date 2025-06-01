document.addEventListener('DOMContentLoaded', () => {
    const scenes = document.querySelectorAll('.scene');
    let currentSceneIndex = 0;

    const sceneDurations = [
        6000, // Escena 1: Mundo Físico
        5500, // Escena 2: Hipervisor
        7000, // Escena 3: VMs
        6500, // Escena 4: Beneficios
        8000, // Escena 5: Creadores
        Infinity // Escena 6: Título Final
    ];

    function showScene(index) {
        scenes.forEach((scene, i) => {
            scene.classList.toggle('active', i === index);
        });
    }

    function nextScene() {
        if (currentSceneIndex < scenes.length - 1) {
            currentSceneIndex++;
            showScene(currentSceneIndex);
            if (isFinite(sceneDurations[currentSceneIndex])) {
                setTimeout(nextScene, sceneDurations[currentSceneIndex]);
            }
        }
    }

    showScene(currentSceneIndex);
    if (isFinite(sceneDurations[currentSceneIndex])) {
        setTimeout(nextScene, sceneDurations[currentSceneIndex]);
    }
});