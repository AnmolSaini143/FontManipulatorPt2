function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 450);
    canvas.position(560, 125);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet Model Loaded!');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}
