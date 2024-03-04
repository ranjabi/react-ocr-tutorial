import ocrCreditCard from './ocr-credit-card.jpeg'
import './App.css';
import { useEffect, useRef } from 'react';
import { result } from './ocrResult';

const lines = result[0].lines
const scale = 0.1

function App() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const context = canvasRef.current.getContext('2d')

    lines.forEach(line => {
      line.words.forEach(word => {
        const poly = word.boundingPolygon
        context.strokeStyle = 'LawnGreen'
        context.lineWidth = 2
        context.beginPath();
        context.moveTo(poly[0].x * scale, poly[0].y * scale);
        context.lineTo(poly[1].x * scale, poly[1].y * scale);
        context.lineTo(poly[2].x * scale, poly[2].y * scale);
        context.lineTo(poly[3].x * scale, poly[3].y * scale);
        context.closePath();
        context.stroke();
      })
    })
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <img src={ocrCreditCard} alt="ocr-credit-card" width={450} height={450} />
        <canvas ref={canvasRef} id="myCanvas" width="450" height="450"></canvas>
      </div>
    </div>
  );
}

export default App;
