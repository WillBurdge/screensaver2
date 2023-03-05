var canvas = document.getElementById('screensaver');
      var ctx = canvas.getContext('2d');
      
      function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw a random shape
        var shape = Math.floor(Math.random() * 3);
        switch (shape) {
          case 0:
            ctx.fillStyle = 'white';
            ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 50, 50);
            break;
          case 1:
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 25, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 2:
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.closePath();
            ctx.stroke();
            break;
        }
        
        // Schedule the next frame
        requestAnimationFrame(draw);
      }
      
      draw();