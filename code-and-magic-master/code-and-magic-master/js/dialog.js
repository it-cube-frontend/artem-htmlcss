const setup = document.querySelector('.setup');
const title = setup.querySelector('.setup-title');

title.addEventListener('mousedown', function(evt) {
    const startMouseX = evt.clientX;
    const startMouseY = evt.clientY;

    const startSetupX = setup.offsetLeft;
    const startSetupY = setup.offsetTop;

    console.log(evt)
    if (evt.target.className === 'setup-close') {
        return;
    }

    const mouseMoveListener = function(evtMove) {
        const dx = evtMove.clientX - startMouseX;
        const dy = evtMove.clientY - startMouseY;

        const nextX = startSetupX + dx;
        const nextY = startSetupY + dy;

        setup.style.left = nextX + 'px';
        setup.style.top = nextY + 'px';
        // console.log('mousemove');
    }

    const mouseUpListener = function() {

        document.removeEventListener('mousemove', mouseMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
    };

    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener)
});

