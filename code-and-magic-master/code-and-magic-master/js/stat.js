const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_GAP = 10;
const TEXT_SIZE = 16;

const COLUMN_GAP = 50;
const COLUMN_WIDTH = 40;
const COLUMN_HEIGHT = 150;

const renderCloud = (ctx) => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect (CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = "white";
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

const getMaxFromArray = function(arr) {
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (current > maxValue) {
            maxValue = current;
        }
    }
    return maxValue;
}

window.renderStatistics = function(ctx, names, times) {
    renderCloud(ctx);

    console.log(times);

     const textX = CLOUD_X + 20;
     const textY = CLOUD_Y + 20 + TEXT_SIZE;
     ctx.fillStyle = "black";
     ctx.fillText("Ура вы победили!", textX, textY);
     ctx.fillText("Список результатов:", textX, textY + TEXT_SIZE);

    const startX = CLOUD_X;
    const startY = CLOUD_Y + CLOUD_HEIGHT - TEXT_SIZE;

    const maxTime = getMaxFromArray(times);

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const nameX = startX + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i;
        const nameY = startY;
        ctx.fillText(name, nameX, nameY);

        if (name == 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'blue';
        }
        const rectX = nameX;
        const rectHeight = COLUMN_HEIGHT * times[i] / maxTime;
        const rectY = nameY - TEXT_SIZE - rectHeight;
        ctx.fillRect(rectX, rectY, COLUMN_WIDTH, rectHeight);

        const timeX = rectX;
        const timeY = rectY - TEXT_SIZE / 2;
        const time = Math.floor(times[i]);
        ctx.fillStyle = "black";
        ctx.fillText(time, timeX, timeY);
    }

    
}




