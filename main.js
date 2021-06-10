function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 425);
    canvas.position(560, 80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function gotPoses() {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background('#C0C0C0');
}