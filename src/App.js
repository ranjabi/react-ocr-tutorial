import ocrCreditCard from './ocr-credit-card.jpeg'
import './App.css';
import { useEffect, useRef } from 'react';
import { result } from './ocrResult';

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const context = canvasRef.current.getContext('2d')

    result.lines.forEach(line => {
      line.words.forEach(word => {
        const poly = word.boundingPolygon
        context.strokeStyle = 'LawnGreen'
        context.lineWidth = 0
        context.beginPath();
        context.moveTo(poly[0].x, poly[0].y);
        context.lineTo(poly[1].x, poly[1].y);
        context.lineTo(poly[2].x, poly[2].y);
        context.lineTo(poly[3].x, poly[3].y);
        context.closePath();
        context.stroke();
      })
    })
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <img src={ocrCreditCard} alt="ocr-credit-card" width={450} height={450} />
        <canvas ref={canvasRef} width="450" height="450"></canvas>
      </div>
    </div>
  );
}

export default App;
