document.getElementById('imageInput').addEventListener('change', (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        let img = new Image();
        img.onload = function() {
            let canvas = document.getElementById('canvasOutput');
            let ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Convert image to OpenCV Mat
            let src = cv.imread(canvas);
            let dst = new cv.Mat();
            cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB);

            // Load pre-trained model and classify
            let net = cv.readNetFromONNX('https://microsoft.github.io/onnxjs-demo/resnet50v2.onnx');
            let blob = cv.blobFromImage(dst, 1.0, new cv.Size(224, 224), new cv.Scalar(0, 0, 0), false, false);
            net.setInput(blob);
            let output = net.forward();

            // Process output (assuming softmax probabilities)
            let classId = output.argMax().data32S[0];
            let confidence = output.data32F[classId];
            alert(`Class ID: ${classId}, Confidence: ${confidence}`);

            // Clean up
            src.delete();
            dst.delete();
            blob.delete();
            output.delete();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});
